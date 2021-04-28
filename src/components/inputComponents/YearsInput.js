import React from "react";

class YearsInput extends React.Component {
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
        <span>{this.props.inputTitle}</span>
        <form action="#">
          <label>From </label>
          <select 
            onChange={this.props.event} 
            data-field={this.props.yearStartDataset}
            value={this.props.yearStart}>
              <option value="">Start Year</option>
              {yearList}
          </select>
          <label> To </label>
          <select 
            onChange={this.props.event} 
            data-field={this.props.yearEndDataset}
            value={this.props.yearEnd}>
              <option value="Present">Present</option>
              {yearList}
          </select>
        </form>
      </div>
    );
  }
}

export default YearsInput;
