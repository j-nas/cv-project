import React from "react";

class ToggleEditButton extends React.Component {
  render() {
    return (
      <button className="editButton" onClick={this.props.toggleEdit}>
        {this.props.inputMode ? "Display" : "  Edit  "}
      </button>
    );
  }
}

export default ToggleEditButton;
