import React, { Component } from 'react';
import UserList from './UserList';
import NewUserForm from './NewUserForm';

class UserData extends Component {
  state = {
    users: [],
    gameToggleOn: true,
    toggleText: "Hide games played"
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

  toggleSwitch = (event) => {
    const isChecked = event.target.checked
    console.log("Switching visibility of games played")
    this.setState(() => ({
      gameToggleOn: isChecked,
      toggleText: isChecked ? "Hide games played" : "Show games played"
    }))
  }

  render() {
    return (
      <div>
       <div className="switch-container">
        <label className="switch">
          <input type="checkbox" checked={this.state.gameToggleOn} onChange={this.toggleSwitch}/>
          <span className="slider round"></span>
        </label>
       <span className="switch-label">{this.state.toggleText}</span>
       </div>
        <NewUserForm users={this.state.users} onAddUser = {this.addUser}/>
        <UserList users={this.state.users} gameToggleOn={this.state.gameToggleOn}/>
      </div>
    )
  }
}

export default UserData