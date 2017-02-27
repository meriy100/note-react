import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import PostEditor from '../containers/PostEditor'
import PostPreview from '../containers/PostPreview'


class PostEidorMaster extends Component {
  render() {
    return (
      <div className="row post-editor-master">
        <div className="col-md-6 editor post-editor">
          <PostEditor params={this.props.params} />
        </div>
        <div className="col-md-6">
          <PostPreview />
        </div>
      </div>
    )
  }
}

export default PostEidorMaster