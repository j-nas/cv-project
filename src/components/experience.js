import React from 'react'
import EmployerNameInput from "./workexp/EmployerNameInput"
import YearsWorkedInput from "./workexp/YearsWorkedInput"
import RelevantSkillsInput from "./workexp/RelevantSkillsInput"
class Experience extends React.Component {

  render() {
    return(
      <div>
        <EmployerNameInput 
          employerName={this.props.stateData.employerName}
          event={this.props.event}/>

        <YearsWorkedInput 
          yearWorkStart={this.props.stateData.yearWorkStart}
          yearWorkComplete={this.props.stateData.yearWorkComplete}
          event={this.props.event}/>
        <RelevantSkillsInput />
        <hr/>
      </div>
    )
  }
}
export default Experience