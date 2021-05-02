import React from "react";


function TextInput(props) {
  return (
    <div>
      <form action="#">
        <label>
          {props.inputTitle} <br/>
          <input
            type="text"
            placeholder={props.placeHolder}
            data-field={props.dataset}
            onChange={props.event}
            value={props.input}
          />
        </label>
      </form>
    </div>
  );
}

export default TextInput;
