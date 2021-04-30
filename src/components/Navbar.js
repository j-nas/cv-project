import React from "react";

import ResetButton from "./buttons/ResetButton";
import PrintButton from "./buttons/PrintButton";
import ToggleEditButton from "./buttons/ToggleEditButton";
class Navbar extends React.Component {
  render() {
    const printButton = (
      <PrintButton
        toggleEdit={this.props.toggleEdit}
        inputMode={this.props.inputMode}
      />
    );

    return (
      <div className="navbar noPrint">
        <div>
          <div className="title">Resume Generator</div>
        </div>
        <div>
          <ResetButton />
          <ToggleEditButton
            toggleEdit={this.props.toggleEdit}
            inputMode={this.props.inputMode}
          />
          {this.props.inputMode ? null : printButton}
        </div>
      </div>
    );
  }
}
export default Navbar;
