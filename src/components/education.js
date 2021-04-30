import React from "react";

import TextInput from "./inputComponents/TextInput";
import YearsInput from "./inputComponents/YearsInput";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      qualification: "",
      yearSchoolStart: "Start year",
      yearSchoolComplete: "Graduation year",
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
    const inputMode = (
      <div>
        <TextInput
          event={this.handleChange}
          input={this.state.schoolName}
          inputTitle="Name of school:"
          dataset="schoolName"
          placeHolder="Institute name here"
        />
        <TextInput
          event={this.handleChange}
          input={this.state.qualification}
          inputTitle="Qualification earned:"
          dataset="qualification"
          placeHolder="Qualification Earned"
        />
        <YearsInput
          event={this.handleChange}
          inputTitle="Years attended:"
          yearStartDataset="yearSchoolStart"
          yearEndDataset="yearSchoolComplete"
          yearStart={this.state.yearSchoolStart}
          yearEnd={this.state.yearSchoolEnd}
        />
      </div>
    );
    const displayMode = (
      <div>
        <h3>{this.state.schoolName}</h3>
        <p>
          {this.state.qualification} <br />
          {this.state.yearSchoolStart} to {this.state.yearSchoolComplete}
        </p>
      </div>
    );
    return <div>{this.props.inputMode ? inputMode : displayMode}</div>;
  }
}

export default Education;
