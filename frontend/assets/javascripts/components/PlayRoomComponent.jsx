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

      function playerReady(event) {
          youtubePlayer.playVideo();
      }

      function onPlayerStateChange(event) {
        let playlist = component.props.playlist
        if(event.data === YT.PlayerState.ENDED) {
          if(playlist.length > 1) {
            youtubePlayer.loadVideoById(playlist[1].video_id)
            component.state.CableApp.MusicChannel.nextPlaylist(playlist[0])
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
      nextPlaylist: function(playlist_item) {
        this.perform('next_playlist', {playlist_item})
      }
    })
    this.setState({ CableApp: CableApp })
  }

  componentDidUpdate() {
    if(this.props.playlist.length !== 0 && !this.state.playing) {
      this.playRoom(this, this.props.playlist[0].video_id)
      this.setState({playing: true})
    }
  }


  handleChangeQueryField(event) {
    this.setState({q: event.target.value})
  }

  render() {
    let { searchVideos, playlist, submitQuerySearchVideos } = this.props
    return(
      <div>
        <h1>PlayRoom</h1>
        <div id="sample">
        </div>
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
              {playlist.map(video =>
                <li key={video.id}
                  className='list-group-item'>
                  <img src={video.url} />
                  <span>{video.title}</span>
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
