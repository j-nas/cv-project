import React from "react";


function ResetButton() {
  const clickHandler = () => {
    window.location.reload()
  }
  return <button onClick={clickHandler}>Reset</button>
}
export default ResetButton;
