import React from "react";

import QualificationInput from "./edu/QualificationInput"
import SchoolNameInput from "./edu/SchoolNameInput"
import YearsAttendingInput from "./edu/YearsAttendingInput"

class Education extends React.Component{

  render() {
    return(
      <div>
        <SchoolNameInput />
        <QualificationInput />
        <YearsAttendingInput />
      </div>
    )
  }
}

export default Education