import React from "react";
import TextInput from "./inputComponents/TextInput";
import YearsInput from "./inputComponents/YearsInput";
import ListInput from "./inputComponents/ListInput";
import uniqid from "uniqid";
class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      employerName: "",
      jobTitle: "",
      yearWorkStart: "",
      yearWorkComplete: "Present",
      listItems: [],
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
  onChangeHandler = (e) => {
    const value = e.target.value;
    const index = this.state.listItems.findIndex(
      (elem) => elem.key === e.target.dataset.field
    );
    const listItems = [...this.state.listItems];
    listItems[index] = { ...listItems[index], text: value };
    this.setState({ listItems });
  };

  addListItem = () => {
    this.setState((prevState) => ({
      listItems: [...prevState.listItems, { key: uniqid(), text: "" }],
    }));
  };
  removeListItem = (e) => {
    this.setState((prevState) => ({
      listItems: prevState.listItems.filter((item) => item.key !== e.target.id),
    }));
  };

  render() {
    const { onChangeHandler, addListItem, removeListItem } = this;

    const inputMode = (
      <div>
        <TextInput
          event={this.handleChange}
          input={this.state.employerName}
          inputTitle="Employer name"
          placeHolder="Employer Name"
          dataset="employerName"
        />
        <TextInput
          event={this.handleChange}
          input={this.state.jobTitle}
          inputTitle="Job title:"
          placeHolder="Job Title"
          dataset="jobTitle"
        />

        <YearsInput
          event={this.handleChange}
          inputTitle="Years worked:"
          yearStart={this.state.yearWorkStart}
          yearStartDataset="yearWorkStart"
          yearEnd={this.state.yearWorkComplete}
          yearEndDataset="yearWorkComplete"
        />
        <ListInput
          inputMode={this.props.inputMode}
          listItems={this.state.listItems}
          onChangeHandler={onChangeHandler}
          addListItem={addListItem}
          removeListItem={removeListItem}
        />
        <br />
      </div>
    );
    const displayMode = (
      <div className="splitPane">
        <div className="leftSide">
        <h3>{this.state.employerName}</h3>
        <p>
          {this.state.jobTitle} <br />
          {this.state.yearWorkStart} to {this.state.yearWorkComplete} <br />
          {this.state.relevantSkills} <br />
        </p>
        </div>
        <div className="rightSide">
        <ListInput
          inputMode={this.props.inputMode}
          listItems={this.state.listItems}
        />
        </div>
      </div>
    );
    return <div>{this.props.inputMode ? inputMode : displayMode}</div>;
  }
}
export default Experience;
