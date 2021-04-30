import React from "react";

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <form action="#">
          <label>
            {this.props.inputTitle}
            <input
              type="text"
              placeholder={this.props.placeHolder}
              data-field={this.props.dataset}
              onChange={this.props.event}
              value={this.props.input}
            />
          </label>
        </form>
      </div>
    );
  }
}
export default TextInput;
