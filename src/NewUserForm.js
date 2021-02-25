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

  isFormComplete = () => {
    if (this.state.lastName.length > 0 &&
        this.state.firstName.length > 0 &&
        this.state.userName.length > 0) {
      return true
    } else {
      return false
    }
  }

  handleInputChange = (event) => {
    let field = event.target.key
    if (field = 'userName') {
      this.setState((prevState)=>({
        userName: event.target.value,
        duplicateError: false,
        formComplete: this.isFormComplete()
      }))
    } else if (field = 'lastName') {
      this.setState((prevState)=>({
        lastName: event.target.value,
        duplicateError: false,
        formComplete: this.isFormComplete()
      }))
    } else if (field = 'firstName') {
      this.setState((prevState)=>({
        firstName: event.target.value,
        duplicateError: false,
        formComplete: this.isFormComplete()
      }))
    }
  }

  evaluateNewUser = () => {
    let { userName, lastName, firstName } = this.state
    if (userName in this.props.users) {
      this.setState((prevState)=>({
        duplicateError: true
      }))
    } else {
      this.props.addUser({ userName, lastName, firstName })
    }
  }
  
  render () {
    return (
      <div>
        <input key='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handeInputChange}/>
        <input key='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handeInputChange}/>
        <input key='userName' placeholder='Username' value={this.state.userName} onChange={this.handeInputChange}/>
        {this.formError()}
        <button onClick={this.evaluateUser}>
          Add User
        </button>
      </div>
    )
  }
}

export default NewUserForm