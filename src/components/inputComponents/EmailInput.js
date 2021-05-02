import React from "react";


function EmailInput(props) {
  return (
    <div>
      <div>
        <label htmlFor="emailInput">Email: </label> <br/>
        <input
          type="email"
          id="emailInput"
          placeholder="email@example.com"
          data-field="email"
          onChange={props.event}
          value={props.email}
        />
      </div>
    </div>
  );
}


export default EmailInput;
