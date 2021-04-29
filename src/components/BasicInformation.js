import React, { Component } from "react";
import EmailInput from "./inputComponents/EmailInput";
import TextInput from "./inputComponents/TextInput"

class BasicInformation extends Component {
  constructor(){
    super()
    this.state = {
      fullName: "Your name here",
      email: "placeholder@email.com",
      phone: "1234567890",
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target.value
    this.setState({
      ...this.state,
      [e.target.dataset.field]: value
    })
    console.log(this.state)
  }
  resetButton(){
    this.setState({
      fullName: "Your name here",
      email: "placeholder@email.com",
      phone: "1234567890",
    })
  }
  render() {
    const editMode = 
      <div>
        <h3>Basic Information</h3>
        <TextInput
          inputTitle="Name: "
          dataset="fullName" 
          input={this.state.fullName}
          event={this.handleChange} />
        <EmailInput 
          email={this.state.email} 
          event={this.handleChange} />
        <TextInput
          inputTitle="Phone:"
          dataset="phone"
          input={this.state.phone} 
          event={this.handleChange} />
      </div>

    const displayMode = 
      <div>
        <h1>{this.state.fullName}</h1>
        <p>
          <a href={"mailto:" + this.state.email}>
            {this.state.email}
          </a>
          <br />
          {this.state.phone}
        </p>
      </div>
    return (
      
      <div>
        {this.props.inputMode ? editMode : displayMode}
        <hr />
      </div>
    )

  }
}

export default BasicInformation;
