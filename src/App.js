import React, { useState } from "react";
import uniqid from "uniqid";

import Navbar from "./components/Navbar";
import BasicInformation from "./components/BasicInformation";
import Education from "./components/Education";
import Experience from "./components/experience";

function App() {
  const [editMode, setEditMode] = useState(true);
  const [schoolInputs, setSchoolInputs] = useState([]);
  const [workInputs, setWorkInputs] = useState([]);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };
  const addSection = (e) => {
    e.target.dataset.field === "schoolInputs"
      ? setSchoolInputs([...schoolInputs, { key: uniqid() }])
      : setWorkInputs([...workInputs, { key: uniqid() }]);

  };
  const deleteSection = (e) => {
    e.target.dataset.field === "schoolInputs"
      ? setSchoolInputs(schoolInputs.filter((inp) => inp.key !== e.target.id))
      : setWorkInputs(workInputs.filter((inp) => inp.key !== e.target.id));
  };

  const br = <br />;
  const education = schoolInputs.map((edu) => {
    return (
      <div key={edu.key}>
        <Education inputMode={editMode} />
        <br />
        <button data-field="schoolInputs" id={edu.key} onClick={deleteSection}>
          Remove
        </button>
      </div>
    );
  });
  const experience = workInputs.map((work) => {
    return (
      <div key={work.key}>
        <Experience inputMode={editMode} />
        <button data-field="workInputs" id={work.key} onClick={deleteSection}>
          Remove
        </button>
      </div>
    );
  });
  return (
    <>
      <Navbar toggleEdit={toggleEdit} inputMode={editMode} />
      <div className="content">
        <BasicInformation inputMode={editMode} />
        <span className="subheader">Education</span>
        <span> </span>
        <button data-field="schoolInputs" onClick={addSection}>
          Add Field
        </button>
        <br />
        {editMode ? br : null}
        {education}

        <span className="subheader">Experience</span>
        <span> </span>
        <button data-field="workInputs" onClick={addSection}>
          Add Field
        </button>
        {editMode ? br : null}
        {experience}
      </div>
    </>
  );
}
export default App;
