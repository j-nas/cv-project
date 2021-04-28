import React from "react"
import BasicInformationDisplay from "./basic/BasicInformationDisplay"
import EducationDisplay from "./edu/EducationDisplay"
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
      </div>
    )
  }
}

export default Display