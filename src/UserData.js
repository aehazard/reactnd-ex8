import React, { Component } from 'react';
import UserList from './UserList';
import NewUserForm from './NewUserForm';

class UserData extends Component {
  state = {
    users: {},
  }
  
  addUser = (userInfo) => {
    this.setState((prevState) => {
      let { userName, lastName, firstName } = userInfo
      prevState[userName] = {
        userName: userName,
        lastName: lastName,
        firstName: firstName,
        gamesPlayed: 0
      }
    })
  }

  render() {
    return (
      <div>
        <NewUserForm users={this.state.users}/>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default UserData