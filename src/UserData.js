import React, { Component } from 'react';
import UserList from './UserList';
import NewUserForm from './NewUserForm';

class UserData extends Component {
  state = {
    users: [],
  }
  
  addUser = (userInfo) => {
    console.log("Adding user")
    console.log("userInfo")
    this.setState((prevState) => {
      let { userName, lastName, firstName } = userInfo
      let newUserInfo = {
        userName: userName,
        lastName: lastName,
        firstName: firstName,
        gamesPlayed: 0
      }
      return {users: [...prevState.users, newUserInfo]}
    })
  }

  render() {
    return (
      <div>
        <NewUserForm users={this.state.users} onAddUser = {this.addUser}/>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}

export default UserData