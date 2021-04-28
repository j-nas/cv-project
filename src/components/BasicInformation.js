import React, { Component } from "react";
import EmailInput from "./basic/EmailInput";
import NameInput from "./basic/NameInput";
import PhoneInput from "./basic/PhoneInput";

class BasicInformation extends Component {
  
  render() {
    
    return (
      <div>
        <h3>Basic Information</h3>
        <NameInput
          fullName={this.props.stateData.fullName}
          event={this.props.event} />
        <EmailInput 
          email={this.props.stateData.email} 
          event={this.props.event} />
        <PhoneInput 
          phone={this.props.stateData.phone} 
          event={this.props.event} />
        <hr />
      </div>
    );
  }
}

export default BasicInformation;
