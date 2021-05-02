import React from "react";



function PrintButton(props) {
  const clickHandler = (e) => {
    e.preventDefault()
    return window.print()
  }
  return (
    <button onClick={clickHandler}>Print/Save PDF</button>
  )
}

export default PrintButton;
