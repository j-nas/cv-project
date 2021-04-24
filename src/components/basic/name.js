import React, { Component } from "react"

class NameInput extends Component {
  constructor() {
    super()

    this.state = {
      name: { text: ""}
    }
  }
  handleChange = (e) => {
    this.setState({
      name: { text: e.target.value }
    })
  }
  
  render() {
    // const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="nameInput">Name:</label>
          <input type="text" id="nameInput"/>
        </form>
      </div>
    )
  }
}


export default NameInput