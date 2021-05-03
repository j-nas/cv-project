import React, { useState } from "react";
import TextInput from "./inputComponents/TextInput";
import YearsInput from "./inputComponents/YearsInput";
import ListInput from "./inputComponents/ListInput";
import uniqid from "uniqid";
function Experience(props) {
  const [state, setState] = useState({
    employerName: "",
    jobTitle: "",
    yearWorkStart: "",
    yearWorkComplete: "Present",
  });
  const [listItems, setListItems] = useState([]);

  const onChangeHandler = (e) => {
    const { value, dataset, name } = e.target;
    name === "listInput"
      ? setListItems(
          listItems.map((item) =>
            item.key === dataset.field ? { ...item, text: value } : item
          )
        )
      : setState({ ...state, [dataset.field]: value });
  };

  const addListItem = () => {
    setListItems([...listItems, { key: uniqid(), text: "" }]);
  };
  const removeListItem = (e) => {
    setListItems(listItems.filter((item) => item.key !== e.target.id))
  };

  const inputMode = (
    <div>
      <TextInput
        event={onChangeHandler}
        input={state.employerName}
        inputTitle="Employer name"
        placeHolder="Employer Name"
        dataset="employerName"
      />
      <TextInput
        event={onChangeHandler}
        input={state.jobTitle}
        inputTitle="Job title:"
        placeHolder="Job Title"
        dataset="jobTitle"
      />

      <YearsInput
        event={onChangeHandler}
        inputTitle="Years worked:"
        yearStart={state.yearWorkStart}
        yearStartDataset="yearWorkStart"
        yearEnd={state.yearWorkComplete}
        yearEndDataset="yearWorkComplete"
      />
      <ListInput
        inputMode={props.inputMode}
        listItems={listItems}
        onChangeHandler={onChangeHandler}
        addListItem={addListItem}
        removeListItem={removeListItem}
      />
      <br />
    </div>
  );
  const displayMode = (
    <div className="splitPane">
      <div className="leftSide">
        <h3>{state.employerName}</h3>
        <p>
          {state.jobTitle} <br />
          {state.yearWorkStart} to {state.yearWorkComplete} <br />
          {state.relevantSkills} <br />
        </p>
      </div>
      <div className="rightSide">
        <ListInput inputMode={props.inputMode} listItems={listItems} />
      </div>
    </div>
  );
  return <div>{props.inputMode ? inputMode : displayMode}</div>;
}
export default Experience;
