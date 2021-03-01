import React, { Component } from 'react';

class UserList extends Component {
  render () {
    const { users } = this.props
    return (
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.userName}>
              {user.userName} {user.firstName} {user.lastName} {this.props.gameToggleOn && user.gamesPlayed}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UserList