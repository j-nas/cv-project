import React from "react"

class EducationDisplay extends React.Component{
  render(){
    return(
      <div>
        <h4>Education</h4>
        <h3>{this.props.schoolName}</h3>
        <p>{this.props.qualification} <br/>
        {this.props.yearSchoolStart} to {this.props.yearSchoolComplete}</p>
        <hr/>
      </div>
    )
  }
}

export default EducationDisplay