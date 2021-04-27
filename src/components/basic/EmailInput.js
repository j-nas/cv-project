import React, { Component } from "react";

class EmailInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="emailInput">Email:</label>
          <input
            type="email"
            id="emailInput"
            onChange={this.props.event}
            value={this.props.email}
          />
        </form>
      </div>
    );
  }
}

export default EmailInput;
