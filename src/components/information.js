import React, { Component } from "react"
import NameInput from "./basic/name"
// import EmailInput from "./basic/email"
// import PhoneInput from "./basic/email"

class BasicInformation extends Component {
  render(){
    return (
      <div>
        <h1>BasicInformation</h1>
        <NameInput />
      </div>
    )
  }
}


export default BasicInformation
