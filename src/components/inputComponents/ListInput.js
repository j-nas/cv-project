import React from "react";

function RelevantSkillsInput(props) {
  
  const listItemInput = props.listItems.map((item) => {
    return (
      <li key={item.key}>
        <input
          type="text"
          placeholder="Enter Achievements here"
          data-field={item.key}
          onChange={props.onChangeHandler}
          value={item.text}
        />
        <button onClick={props.removeListItem} id={item.key}>
          Remove
        </button>
      </li>
    );
  });

  const listItemDisplay = props.listItems.map((item) => {
    return <li key={item.key}>{item.text}</li>;
  });

  const inputMode = (
    <div>
      <ul>
        Highlights/Achievements
        <button onClick={props.addListItem}>Add</button>
        {listItemInput}
      </ul>
    </div>
  );
  const displayMode = <ul>{listItemDisplay}</ul>;
  return <div>{props.inputMode ? inputMode : displayMode}</div>;

}
export default RelevantSkillsInput;
