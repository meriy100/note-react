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
    let { submitQuerySearchVideos } = this.props
    submitQuerySearchVideos('jaz')

    let CableApp = {}
    CableApp.cable = ActionCable.createConsumer("ws://localhost:3000/cable")
    CableApp.MusicChannel = CableApp.cable.subscriptions.create("MusicChannel", {
      connected:  function() {
        // Called when the subscription is ready for use on the server
        this.perform('broadcast', {message: "" })
      },
      disconnected: function() {
      },
      received: function(data) {
        console.log(data)
        return data
      },
      add_videos: function(message) {
        console.log('ok')
        this.perform('broadcast', {message: message})
      }
    })
    this.setState({ CableApp: CableApp })
  }


  handleChangeQueryField(event) {
    this.setState({q: event.target.value})
  }

  render() {
    let { searchVideos, submitQuerySearchVideos } = this.props
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
                  <span>searchVideo.snippet.title</span>
                  <button className='btn btn-primary send-playlist' onClick={()=>
                    this.state.CableApp.MusicChannel.add_videos({ videoId: '', url: 'http://example.com', title: 'test' })
                  } >プレイリストに追加</button>
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
