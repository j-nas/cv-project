import React from "react";

class YearsAttendingInput extends React.Component{
  render(){
    return(
      <div>
        <form action="#">
          <label> Years attending</label>
          <input 
            type="date"
            step="365" /> 
        </form>
      </div>
    )
  }
}

export default YearsAttendingInput