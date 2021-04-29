import React, { Component } from "react";

class EmailInput extends Component {
  render() {
    return (
      <div>
        <div>
          <label htmlFor="emailInput">Email: </label>
          <input
            type="email"
            id="emailInput"
            placeholder="email@example.com"
            data-field="email"
            onChange={this.props.event}
            value={this.props.email}
          />
        </div>
      </div>
    );
  }
}

export default EmailInput;
