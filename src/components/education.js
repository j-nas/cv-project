import React, { useState } from "react";

import TextInput from "./inputComponents/TextInput";
import YearsInput from "./inputComponents/YearsInput";

function Education(props) {
  
  const [state, setState] = useState({
      schoolName: "",
      qualification: "",
      yearSchoolStart: "",
      yearSchoolComplete: "",
    }
  )
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.dataset.field]: value,
    });
  }
    const inputMode = (
      <div>
        <TextInput
          event={handleChange}
          input={state.schoolName}
          inputTitle="Name of school:"
          dataset="schoolName"
          placeHolder="Institute name here"
        />
        <TextInput
          event={handleChange}
          input={state.qualification}
          inputTitle="Qualification earned:"
          dataset="qualification"
          placeHolder="Qualification Earned"
        />
        <YearsInput
          event={handleChange}
          inputTitle="Years attended:"
          yearStartDataset="yearSchoolStart"
          yearEndDataset="yearSchoolComplete"
          yearStart={state.yearSchoolStart}
          yearEnd={state.yearSchoolEnd}
        />
      </div>
    );
    const displayMode = (
      <div>
        <h3>{state.schoolName}</h3>
        <p>
          {state.qualification} <br />
          {state.yearSchoolStart} to {state.yearSchoolComplete}
        </p>
      </div>
    );
    return <div>{props.inputMode ? inputMode : displayMode}</div>;
  }

export default Education;
