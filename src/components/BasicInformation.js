import React, { useState } from "react";
import EmailInput from "./inputComponents/EmailInput";
import TextInput from "./inputComponents/TextInput";

function BasicInformation(props) {
  const [state, setState] = useState(
    {
      fullName: "",
      email: "",
      phone: "",
    });
  
  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.dataset.field]: value,
    });
  }

  const editMode = (
    <div>
      <h3>Basic Information</h3>
      <TextInput
        inputTitle="Name: "
        dataset="fullName"
        input={state.fullName}
        event={handleChange}
        placeHolder="Your Name"
      />
      <EmailInput email={state.email} event={handleChange} />
      <TextInput
        inputTitle="Phone:"
        dataset="phone"
        input={state.phone}
        event={handleChange}
        placeHolder="(555) 555-1234"
      />
      
    </div>
  );

  const displayMode = (
    <div className="splitPane">
      <div className="leftSide name">
        <h1>{state.fullName}</h1>
      </div>
      <div className="rightSideHeader">
        
          <a href={"mailto:" + state.email}>{state.email}</a>
          <br />
          {state.phone}
        
      </div>
    </div>
  );
  return (
    <div>
      {props.inputMode ? editMode : displayMode}
      <hr />
    </div>
  );
  
}

export default BasicInformation;
