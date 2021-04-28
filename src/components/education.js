import React from "react";

import QualificationInput from "./edu/QualificationInput"
import SchoolNameInput from "./edu/SchoolNameInput"
import YearsAttendingInput from "./edu/YearsAttendingInput"

class Education extends React.Component{

  render() {
    return(
      <div>
        <SchoolNameInput 
          event={this.props.event}
          schoolName={this.props.stateData.schoolName} />
        
        <QualificationInput 
          event={this.props.event} 
          qualification={this.props.stateData.qualification}/>
        <YearsAttendingInput 
          event={this.props.event} />
        <hr/>
      </div>
    )
  }
}

export default Education