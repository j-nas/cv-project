import React from "react"

class EmployerNameInput extends React.Component{
  render(){
    return(
      <div>
        <form action="#">
          <label >Employer Name: </label>
          <input 
            type="text"
            data-field="employerName"
            onChange={this.props.event}
            value={this.props.employerName}/>
        </form>
      </div>
    )
  }
}
export default EmployerNameInput