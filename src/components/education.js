import React from "react";

import TextInput from "./inputComponents/TextInput"
import YearsInput from "./inputComponents/YearsInput"
class Education extends React.Component{
  constructor(){
    super()
    this.state = {
      schoolDataset: "schoolName",
      schoolInput: "School Name:",
      qualificationDataset: "qualification",
      qualificationInput: "Qualification Earned:",
      yearsInput: "Years attended:",
      startDataset: "yearSchoolStart",
      endDataset: "yearSchoolComplete"
    }
  }
  render() {
    return(
      <div>
        <TextInput 
          event={this.props.event}
          input={this.props.stateData.schoolName}
          inputTitle={this.state.schoolInput}
          dataset={this.state.schoolDataset} />
        <TextInput 
          event={this.props.event} 
          input={this.props.stateData.qualification}
          inputTitle={this.state.qualificationInput}
          dataset={this.state.qualificationDataset} />
        <YearsInput 
          event={this.props.event}
          inputTitle={this.state.yearsInput}
          yearStartDataset={this.state.startDataset}
          yearEndDataset={this.state.endDataset} 
          yearStart={this.props.stateData.yearSchoolStart}
          yearEnd={this.props.stateData.yearSchoolEnd}/>
        <hr/>
      </div>
    )
  }
}

export default Education