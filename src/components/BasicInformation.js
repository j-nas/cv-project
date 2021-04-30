import React, { Component } from "react";
import EmailInput from "./inputComponents/EmailInput";
import TextInput from "./inputComponents/TextInput";

class BasicInformation extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      phone: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.dataset.field]: value,
    });
  }

  render() {
    const editMode = (
      <div>
        <h3>Basic Information</h3>
        <TextInput
          inputTitle="Name: "
          dataset="fullName"
          input={this.state.fullName}
          event={this.handleChange}
          placeHolder="Your Name"
        />
        <EmailInput email={this.state.email} event={this.handleChange} />
        <TextInput
          inputTitle="Phone:"
          dataset="phone"
          input={this.state.phone}
          event={this.handleChange}
          placeHolder="(555) 555-1234"
        />
        
      </div>
    );

    const displayMode = (
      <div className="splitPane">
        <div className="leftSide name">
          <h1>{this.state.fullName}</h1>
        </div>
        <div className="rightSideHeader">
          
            <a href={"mailto:" + this.state.email}>{this.state.email}</a>
            <br />
            {this.state.phone}
          
        </div>
      </div>
    );
    return (
      <div>
        {this.props.inputMode ? editMode : displayMode}
        <hr />
      </div>
    );
  }
}

export default BasicInformation;
