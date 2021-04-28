import React from "react";

class YearsAttendingInput extends React.Component {
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
        <span> Years Attended</span>
        <form action="#">
          <label>From </label>
          <select onChange={this.props.event} data-field="yearSchoolStart">
            <option value="">Start Year</option>
            {yearList}
          </select>
          <label> To </label>
          <select onChange={this.props.event} data-field="yearSchoolComplete">
            <option value="">Finish Year</option>
            {yearList}
          </select>
        </form>
      </div>
    );
  }
}

export default YearsAttendingInput;
