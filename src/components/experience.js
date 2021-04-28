import React from 'react'
import TextInput from "./inputComponents/TextInput"
import YearsInput from './inputComponents/YearsInput'
import ListInput from "./inputComponents/ListInput"
class Experience extends React.Component {
  constructor(){
    super()
    this.state = {
      employerInput: "Employer Name:",
      employerDataset: "employerName",
      jobTitleInput: "Job Title:",
      jobTitleDataset: "jobTitle",
      yearsInput: "Years Worked",
      startDataset: "yearWorkStart",
      endDataset: "yearWorkComplete",
    }
  }
  render() {
    return(
      <div>
        <TextInput 
          event={this.props.event}
          input={this.props.stateData.employerName} 
          inputTitle={this.state.employerInput}
          dataset={this.state.employerDataset}/>
        <TextInput 
          event={this.props.event}
          input={this.props.stateData.jobTitle} 
          inputTitle={this.state.jobTitleInput}
          dataset={this.state.jobTitleDataset}/>
        
        <YearsInput 
          inputTitle={this.state.yearsInput}
          yearStart={this.props.stateData.yearWorkStart}
          yearStartDataset={this.state.startDataset}
          yearEnd={this.props.stateData.yearWorkComplete}
          yearEndDataset={this.state.endDataset}
          event={this.props.event}/>
        <ListInput />
        <hr/>
      </div>
    )
  }
}
export default Experience