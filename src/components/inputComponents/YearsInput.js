import React from "react";

function YearsInput(props){
  let currentYear = new Date().getFullYear();

  const years = Array(100)
    .fill()
    .map(() => currentYear--);
  const yearList = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));

  return (
    <div>
      <form action="#">
        <label>{props.inputTitle} <br/></label>
        <select
          onChange={props.event}
          data-field={props.yearStartDataset}
          value={props.yearStart}
        >
          <option value="">Start Year</option>
          {yearList}
        </select>
        <label> To </label>
        <select
          onChange={props.event}
          data-field={props.yearEndDataset}
          value={props.yearEnd}
        >
          <option value="Present">Present</option>
          {yearList}
        </select>
      </form>
    </div>
  );
}


export default YearsInput;
