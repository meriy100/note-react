import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class PlayRoomComponent extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
      q: ''
    };
  }

  componentDidMount () {
    let { submitQuerySearchVideos } = this.props
    submitQuerySearchVideos('jaz')
  }

  handleChangeQueryField(event) {
    this.setState({q: event.target.value})
  }

  render() {
    let { searchVideos, submitQuerySearchVideos } = this.props
    return(
      <div>
        <h1>PlayRoom</h1>
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
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default PlayRoomComponent
