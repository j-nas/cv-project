import { Component } from "react";

class PhoneInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="phoneInput">Phone: </label>
          <input
            type="text"
            id="phoneInput"
            data-field="phone"
            onChange={this.props.event}
            value={this.props.phone}
          />
        </form>
      </div>
    );
  }
}

export default PhoneInput;
