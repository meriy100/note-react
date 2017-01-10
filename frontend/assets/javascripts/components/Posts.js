import React, { PropTypes } from 'react'

const Posts = ({ str, clickTriangle, clickSquare, clickCircle, clickCross }) => (
  <div>
    <h1>Posts {str}</h1>
    <ul>
    </ul>
    <table>
      <tbody>
        <tr>
          <td></td>
          <td>
            <button onClick={ clickTriangle }>△</button>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <button onClick={ clickSquare }>□</button>
          </td>
          <td></td>
          <td>
            <button onClick={ clickCircle }>○</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button onClick={ clickCross }>×</button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
)

Posts.propTypes = {
  str: PropTypes.string,
  clickTriangle: PropTypes.func.isRequired,
  clickSquare: PropTypes.func.isRequired,
  clickCircle: PropTypes.func.isRequired,
  clickCross: PropTypes.func.isRequired
}

export default Posts
