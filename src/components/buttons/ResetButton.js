import React from "react"

class ResetButton extends React.Component{
  constructor(){
    super()
    this.resetButton = this.resetButton.bind(this)
  }
  resetButton() {
    window.location.reload()
  }
  render() {
    return(
      <button onClick={this.resetButton}>
        Reset
      </button>
    )
  }

}


export default ResetButton