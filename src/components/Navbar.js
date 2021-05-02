import React from "react";

import ResetButton from "./buttons/ResetButton";
import PrintButton from "./buttons/PrintButton";
import ToggleEditButton from "./buttons/ToggleEditButton";
function Navbar(props) {
  
    const printButton = (
      <PrintButton
        toggleEdit={props.toggleEdit}
        inputMode={props.inputMode}
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
            toggleEdit={props.toggleEdit}
            inputMode={props.inputMode}
          />
          {props.inputMode ? null : printButton}
        </div>
      </div>
    );
  
}
export default Navbar;
