import React from "react"
import BasicInformationDisplay from "./basic/BasicInformationDisplay"
import EducationDisplay from "./edu/EducationDisplay"
import ExperienceDisplay from "./workexp/ExperienceDisplay"
class Display extends React.Component{
  render(){
    
    
    return(
      <div>
        <BasicInformationDisplay 
          name={this.props.stateData.fullName}
          email={this.props.stateData.email}
          phone={this.props.stateData.phone}
          />
        <hr/>
        <EducationDisplay
          schoolName={this.props.stateData.schoolName}
          qualification={this.props.stateData.qualification}
          yearSchoolStart={this.props.stateData.yearSchoolStart}
          yearSchoolComplete={this.props.stateData.yearSchoolComplete} />
        <ExperienceDisplay
          employerName={this.props.stateData.employerName}
          relevantSkills={this.props.stateData.relevantSkills}
          yearWorkStart={this.props.stateData.yearWorkStart}
          yearWorkComplete={this.props.stateData.yearWorkComplete} />
      </div>
    )
  }
}

export default Display