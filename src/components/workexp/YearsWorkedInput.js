import React from "react";

class YearsWorkedInput extends React.Component {
  render() {
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
        <span> Years Worked</span>
        <form action="#">
          <label>From </label>
          <select onChange={this.props.event} data-field="yearWorkStart">
            <option value="">Start Year</option>
            {yearList}
          </select>
          <label> To </label>
          <select onChange={this.props.event} data-field="yearWorkComplete">
            <option value="">Finish Year</option>
            {yearList}
          </select>
        </form>
      </div>
    );
  }
}

export default YearsWorkedInput;
