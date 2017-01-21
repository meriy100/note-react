import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class PostComponent extends Component {
  componentDidMount() {
    let { params, getPost } = this.props
    getPost(params.id)
  }

  render() {
    let { post } = this.props
    return (
      <div className="post-component">
        <div className="post-header">
          <div className="post-header-left">
            <div className="post-path-list">
              <div className="path-list">
                {post.pathList.map(pathListItem =>
                  <a className="path-list-link" key={pathListItem.id}>
                    <span className="name">{pathListItem.name}</span><span className="slash">/</span>
                  </a>
                )}
              </div>
            </div>
            <h1 className="post-title">
              <span className="post-title">{post.name}</span>
              <Link to={`posts/${post.id}/edit`} className="btn btn-primary">
                <i className="fa fa-pencil" />
                Edit
              </Link>
            </h1>
            <div className="post-fotter">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostComponent
