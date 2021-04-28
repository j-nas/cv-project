import React from "react"

class QualificationInput extends React.Component{
  render(){
    return(
      <div>
        <form action="#">
          <label>Qualification Earned: </label>
          <input 
            type="text"
            data-field="qualification"
            onChange={this.props.event}
            value={this.props.qualification}/>
        </form>
      </div>
    )
  }
}

export default QualificationInput