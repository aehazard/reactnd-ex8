import React, { Component } from 'react';

class NewUserForm extends Component {
  state = {
    lastName: '',
    firstName: '',
    userName: ''
  }

  formError = () => {
    const { users } = this.props
    let duplicateError = false
    for (const user of users) {
      if (this.state.userName === user.userName) {
        duplicateError = true
        break
      }
    }
    if (duplicateError) {
          return (<p>Error: Username is already in use</p>)
    } else {
      return
    }
  }

  isFormComplete = () => {
    if (this.state.lastName.length > 0 &&
        this.state.firstName.length > 0 &&
        this.state.userName.length > 0) {
      console.log("Form is complete")
      return false
    } else {
      console.log("Form is not complete")
      return true
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    console.log(`Set ${value} as ${name}`)
    this.setState(()=>({
        [name]: value,
        formComplete: this.isFormComplete()
      }))
  }

  evaluateNewUser = () => {
    let { userName, lastName, firstName } = this.state
    if (userName in this.props.users) {
      console.log("Username is a duplicate")
      this.setState((prevState)=>({
        duplicateError: true
      }))
    } else {
      console.log("Username is not a duplicate")
      this.props.onAddUser({ userName, lastName, firstName })
      this.setState(()=>({
        userName: '',
        lastName: '',
        firstName: ''
      }))
    }
  }
  
  render () {
    const { lastName, firstName, userName } = this.state
    return (
      <div>
        <input type="text" name='lastName' placeholder='Last Name' value={lastName} onChange={this.handleInputChange}/>
        <input type="text" name='firstName' placeholder='First Name' value={firstName} onChange={this.handleInputChange}/>
        <input type="text" name='userName' placeholder='Username' value={userName} onChange={this.handleInputChange}/>
        {this.formError()}
        <button onClick={this.evaluateNewUser} disabled={this.isFormComplete()}>
          Add User
        </button>
      </div>
    )
  }
}

export default NewUserForm