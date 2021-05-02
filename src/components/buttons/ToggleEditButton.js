import React from "react";


function ToggleEditButton(props) {
  return( 
    <button
      className="editButton"
      onClick={props.toggleEdit}
    >
      {props.inputMode?"Display":"  Edit  "}
    </button>
  )
}
export default ToggleEditButton;
