import React, { Component } from "react";
import EmailInput from "./inputComponents/EmailInput";
import TextInput from "./inputComponents/TextInput"

class BasicInformation extends Component {
  constructor(){
    super()
  this.state = {
    nameInput: "Name:",
    nameDataset: "fullName",
    phoneInput: "Phone:",
    phoneDataset: "phone"
  }
  }
  render() {
    
    return (
      <div>
        <h3>Basic Information</h3>
        <TextInput
          input={this.props.stateData.fullName}
          inputTitle={this.state.nameInput}
          event={this.props.event}
          dataset={this.state.nameDataset} />
        <EmailInput 
          email={this.props.stateData.email} 
          event={this.props.event} />
        <TextInput
          input={this.props.stateData.phone} 
          inputTitle={this.state.phoneInput}
          dataset={this.state.phoneDataset}
          event={this.props.event} />
        <hr />
      </div>
    );
  }
}

export default BasicInformation;
