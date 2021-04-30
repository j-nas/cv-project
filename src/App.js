import React, { Component } from "react";
import uniqid from "uniqid";

import Navbar from "./components/Navbar";
import BasicInformation from "./components/BasicInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  constructor() {
    super();
    this.state = {
      editMode: true,
      schoolInputs: [],
      workInputs: [],
    };
  }
  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };
  addSection = (e) => {
    this.setState((prevState) => ({
      [e.target.dataset.field]: [
        ...prevState[e.target.dataset.field],
        { key: uniqid() },
      ],
    }));
  };
  deleteSection = (e) => {
    this.setState((prevState) => ({
      [e.target.dataset.field]: prevState[e.target.dataset.field].filter(
        (item) => item.key !== e.target.id
      ),
    }));
  };
  render() {
    const { schoolInputs, workInputs, editMode } = this.state;
    const br = <br />;
    let education = schoolInputs.map((edu) => {
      return (
        <div key={edu.key}>
          <Education inputMode={this.state.editMode} />
          <br />
          <button
            data-field="schoolInputs"
            id={edu.key}
            onClick={this.deleteSection}
          >
            Remove
          </button>
        </div>
      );
    });

    let experience = workInputs.map((work) => {
      return (
        <div key={work.key}>
          <Experience inputMode={this.state.editMode} />
          <button
            data-field="workInputs"
            id={work.key}
            onClick={this.deleteSection}
          >
            Remove
          </button>
        </div>
      );
    });
    return (
      <div>
        <Navbar toggleEdit={this.toggleEdit} inputMode={this.state.editMode} />
        <div className="content">
          <BasicInformation inputMode={this.state.editMode} />
          <span className="subheader">Education</span>
          <span> </span>
          <button data-field="schoolInputs" onClick={this.addSection}>
            Add Field
          </button>
          <br/>
          {editMode ? br : null}
          {education}
          <span className="subheader">Experience</span>
          <span> </span>
          <button data-field="workInputs" onClick={this.addSection}>
            Add Field
          </button>
          {editMode ? br : null}
          {experience}
        </div>
      </div>
    );
  }
}
export default App;
