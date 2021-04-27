import React from "react"

class BasicInformationDisplay extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>
          <a href={"mailto:" + this.props.email}>
            {this.props.email}
          </a>
        </p>
        <p>{this.props.phone}</p>
      </div>
    )
  }
}

export default BasicInformationDisplay