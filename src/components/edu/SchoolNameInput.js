import React from "react"

class SchoolNameInput extends React.Component{
  render(){
    return(
      <div>
        <form action="#">
          <label >School Name: </label>
          <input 
            type="text"
            data-field="schoolName"
            onChange={this.props.event}
            value={this.props.schoolName}/>
        </form>
      </div>
    )
  }
}
export default SchoolNameInput