import React from 'react'

class ExperienceDisplay extends React.Component {

  render() {
    return(
      <div>
        <h4>Employment</h4>
        <h3>{this.props.employerName}</h3>
        <p>
          {this.props.yearWorkStart} to {this.props.yearWorkComplete} <br/>
          {this.props.relevantSkills} <br/>
        </p>
        <hr/>
      </div>
    )
  }
}
export default ExperienceDisplay