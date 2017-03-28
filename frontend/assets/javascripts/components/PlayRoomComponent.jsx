import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import ActionCable from 'actioncable'

class PlayRoomComponent extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      q: '',
      CableApp: {}
    };
  }

  componentDidMount () {
    let { submitQuerySearchVideos, clickAddPlayList } = this.props
    submitQuerySearchVideos('jaz')

    let CableApp = {}
    CableApp.cable = ActionCable.createConsumer("ws://localhost:3000/cable")
    CableApp.MusicChannel = CableApp.cable.subscriptions.create("MusicChannel", {
      connected:  function() {
      },
      disconnected: function() {
      },
      received: function(data) {
        clickAddPlayList(data)
        return data
      },
      add_videos: function(searchVideo) {
        let message =  {
          videoId: searchVideo.id.videoId,
          url: searchVideo.snippet.thumbnails.default.url,
          title: searchVideo.snippet.title,
        }
        this.perform('add_video', {message})
      }
    })
    this.setState({ CableApp: CableApp })
  }


  handleChangeQueryField(event) {
    this.setState({q: event.target.value})
  }

  render() {
    let { searchVideos, playlist, submitQuerySearchVideos } = this.props
    return(
      <div>
        <h1>PlayRoom</h1>
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
                <li key={video.videoId}
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
