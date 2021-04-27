import React from "react"

class ToggleEditButton extends React.Component{
  render() {
    return(
      <button onClick={this.props.toggleEdit}>Toggle Edit</button>
    )
  }
}

export default ToggleEditButton