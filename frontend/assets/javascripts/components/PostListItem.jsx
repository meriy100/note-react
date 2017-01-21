import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class PostListItem extends Component {
  static propTypes = { initialCount: React.PropTypes.number };
  render() {
    let { id, path, name, createdUser } = this.props
    return(
      <li className="list-group-item post-list-item">
        <div className="post-list-item-inner">
          <div className="post-list-item-right">
            <div className="path-list">
              <Link>{path}</Link>
            </div>
            <h2 className="post-title">
              <Link  to={`posts/${id}`} className="post-title-link">{name}</Link>
              <Link to={`posts/${id}/edit`} className="btn btn-primary">
                <i className="fa fa-pencil" />
                Edit
              </Link>
            </h2>
            <div className="post-list-fotter">
              <div className="post-record">
                <div className="post-autour">
                  <span>Created by</span>
                  <Link to="/" className="authour-name-link">{createdUser.name}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default PostListItem

