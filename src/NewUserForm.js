import React, { Component } from 'react';

class NewUserForm extends Component {
  state = {
    formComplete: false,
    duplicateError: false,
    lastName: '',
    firstName: '',
    userName: ''
  }

  formError = () => {
    if (this.state.duplicateError) {
          return (<p>Error: Username is already in use</p>)
    } else {
      return
    }
  }

  getButtonStatus = () => {
    if (this.isFormComplete()) {
      return "enabled"
    } else {
      return "disabled"
    }
  }

  isFormComplete = () => {
    if (this.state.lastName.length > 0 &&
        this.state.firstName.length > 0 &&
        this.state.userName.length > 0) {
      return true
    } else {
      return false
    }
  }

  handleInputChange = event => {
    const {key, value} = event.target;
    console.log(`Set ${value} as ${key}`)
    this.setState(()=>({
        [key]: value,
        duplicateError: false,
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
      this.props.addUser({ userName, lastName, firstName })
    }
  }
  
  render () {
    const { lastName, firstName, userName } = this.state
    return (
      <div>
        <input type="text" key='lastName' placeholder='Last Name' value={lastName} onChange={this.handeInputChange}/>
        <input type="text" key='firstName' placeholder='First Name' value={firstName} onChange={this.handeInputChange}/>
        <input type="text" key='userName' placeholder='Username' value={userName} onChange={this.handeInputChange}/>
        {this.formError()}
        <button onClick={this.evaluateUser} disabled={this.state.formComplete.toString()}>
          Add User
        </button>
      </div>
    )
  }
}

export default NewUserForm