import React, { Component } from "react";
import EmailInput from "./basic/EmailInput";
import NameInput from "./basic/NameInput";
import PhoneInput from "./basic/PhoneInput";

class BasicInformation extends Component {
  
  render() {
    return (
      <div>
        <h1>Basic Information</h1>
        <NameInput
          fullName={this.props.name}
          event={this.props.nameEvent} />
        <EmailInput 
          email={this.props.email} 
          event={this.props.emailEvent} />
        <PhoneInput 
          phone={this.props.phone} 
          event={this.props.phoneEvent} />
      </div>
    );
  }
}

export default BasicInformation;
