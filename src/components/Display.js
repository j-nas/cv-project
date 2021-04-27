import React from "react"
import BasicInformationDisplay from "./basic/BasicInformationDisplay"
class Display extends React.Component{
  render(){
    return(
      <div>
        <BasicInformationDisplay 
          name={this.props.name}
          email={this.props.email}
          phone={this.props.phone}/>
        
      </div>
    )
  }
}

export default Display