import React from 'react'
import TextInput from "./inputComponents/TextInput"
import YearsInput from './inputComponents/YearsInput'
import ListInput from "./inputComponents/ListInput"

import ResetButton from './buttons/ResetButton'
class Experience extends React.Component {
  constructor(){
    super()
    this.state = {
      employerName: "Employer name here",
      jobTitle: "Job title here",
      yearWorkStart: "",
      yearWorkComplete: "",
      relevantSkills: [],
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
  resetButton() {
    this.setState = {
      employerName: "Employer name here",
      jobTitle: "Job title here",
      yearWorkStart: "",
      yearWorkComplete: "",
      relevantSkills: [],
    }
  }

  render() {
    const inputMode =
      <div>
        <TextInput 
          event={this.handleChange}
          input={this.state.employerName} 
          inputTitle="Employer name"
          dataset="employerName"/>
        <TextInput 
          event={this.handleChange}
          input={this.state.jobTitle} 
          inputTitle="Job title:"
          dataset="jobTitle"/>
        
        <YearsInput 
          event={this.handleChange}
          inputTitle="Years worked:"
          yearStart={this.state.yearWorkStart}
          yearStartDataset="yearWorkStart"
          yearEnd={this.state.yearWorkComplete}
          yearEndDataset="yearWorkComplete"
          />
        <ListInput />
      </div>
    const displayMode =
      <div>
        <h4>Employment</h4>
        <h3>{this.state.employerName}</h3>
        <p>
            {this.state.jobTitle} <br/>
            {this.state.yearWorkStart} to {this.state.yearWorkComplete} <br/>
            {this.state.relevantSkills} <br/>
        </p>
      </div>
    return (
      <div>
        {this.props.inputMode?inputMode:displayMode}
        <ResetButton 
          resetButton = {this.resetButton} />
        <hr/>
      </div>
    )
  }
}
export default Experience