import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import ActionCable from 'actioncable'
// import playRoom from '../lib/play_room'
var youtube = require('youtube-iframe-player');

class PlayRoomComponent extends Component {
  static propTypes = {
  }

  playRoom(component, videoId) {
    youtube.init(() => {
      console.log('Youtube API Loaded on Component');

      var youtubePlayer = youtube.createPlayer('sample', {
          width: '720',
          height: '405',
          videoId: videoId,
          playerVars: { 'autoplay': 0, 'controls': 1 },
          events: {
            'onReady': playerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      component.setState({youtubePlayer})

      function playerReady(event) {
          youtubePlayer.playVideo();
      }

      function onPlayerStateChange(event) {
        let playlist = component.props.playlist
        if(event.data === YT.PlayerState.ENDED) {
          if(playlist.length > 1) {
            youtubePlayer.loadVideoById(playlist[1].video_id)
            component.state.CableApp.MusicChannel.endPlaylistItem(playlist[0])
          }
        }
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      q: '',
      playing: false,
      youtubePlayer: {},
      CableApp: {}
    };
  }

  componentDidMount () {
    let { submitQuerySearchVideos, queryPlaylist, wsQueryPlaylist } = this.props
    submitQuerySearchVideos('music')
    queryPlaylist()

    let CableApp = {}
    CableApp.cable = ActionCable.createConsumer(process.env.WEBSOCET_ENDPOINT)
    CableApp.MusicChannel = CableApp.cable.subscriptions.create("MusicChannel", {
      connected:  function() {
      },
      disconnected: function() {
      },
      received: function(data) {
        switch (data.type) {
          case 'QUERY_PLAYLIST':
            wsQueryPlaylist(data.payload)
            return
          default:
            return
        }
      },
      add_videos: function(searchVideo) {
        let message =  {
          videoId: searchVideo.id.videoId,
          url: searchVideo.snippet.thumbnails.default.url,
          title: searchVideo.snippet.title,
        }
        this.perform('add_playlist_item', {message})
      },
      removePlaylistItem: function(playlist_item) {
        this.perform('destroy_playlist_item', {playlist_item})
      },
      endPlaylistItem: function(playlist_item) {
        this.perform('end_playlist_item', {playlist_item})
      }
    })
    this.setState({ CableApp: CableApp })
  }

  componentDidUpdate() {
    let { currentUser } = this.props
    if(currentUser.host) {
      if(this.props.playlist.length !== 0 && !this.state.playing) {
        this.playRoom(this, this.props.playlist[0].video_id)
        this.setState({playing: true})
      }
    }
  }


  handleChangeQueryField(event) {
    this.setState({q: event.target.value})
  }

  render() {
    let { searchVideos, playlist, submitQuerySearchVideos } = this.props
    return(
      <div className='play_room'>
        <h1>PlayRoom</h1>
        <div id="sample" />
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <input className='form-control' value={this.state.q} onChange={(event) => this.handleChangeQueryField(event) }/>
              <button className='btn btn-primary' onClick={() => submitQuerySearchVideos(this.state.q)} >検索</button>
            </div>
            <br/>
            <ul className="list-group">
              {searchVideos.map(searchVideo =>
                <li key={searchVideo.id.videoId}
                  className='list-group-item'>
                  <img src={searchVideo.snippet.thumbnails.default.url} />
                  <span>{searchVideo.snippet.title}</span>
                  <button className='btn btn-primary send-playlist' onClick={()=>
                    this.state.CableApp.MusicChannel.add_videos(searchVideo)
                  } >プレイリストに追加</button>
                </li>
              )}
            </ul>
          </div>

          <div className='col-md-6'>
            <ul className="list-group">
              {playlist.map(playlist_item =>
                <li key={playlist_item.id}
                  className='list-group-item'>
                  <img src={playlist_item.url} />
                  <span>{playlist_item.title}</span>
                  <button className='btn btn-danger btn-xs' onClick={()=>
                    this.state.CableApp.MusicChannel.removePlaylistItem(playlist_item)
                  }><i className='fa fa-trash-o'/></button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayRoomComponent
