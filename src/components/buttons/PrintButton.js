import React from "react";

class PrintButton extends React.Component {
  constructor() {
    super();
    this.printButton = this.printButton.bind(this);
  }
  printButton() {
    return window.print();
  }
  render() {
    return <button onClick={this.printButton}>Print/Save PDF</button>;
  }
}

export default PrintButton;
