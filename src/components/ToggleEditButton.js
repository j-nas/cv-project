import React from "react"

class ToggleEditButton extends React.Component{
  render() {
    return(
      <button onClick={this.props.toggle}>Toggle Edit</button>
    )
  }
}

export default ToggleEditButton