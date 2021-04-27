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
          fullName={this.props.name}
          event={this.props.event} />
        <EmailInput 
          email={this.props.email} 
          event={this.props.event} />
        <PhoneInput 
          phone={this.props.phone} 
          event={this.props.event} />
        <hr />
      </div>
    );
  }
}

export default BasicInformation;
