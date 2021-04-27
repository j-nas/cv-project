import React, { Component } from "react";

class NameInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nameInput">Name:</label>
          <input
            type="text"
            id="nameInput"
            onChange={this.props.event}
            value={this.props.fullName}
          />
        </form>
      </div>
    );
  }
}

export default NameInput;
