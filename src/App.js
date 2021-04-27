import React, { Component } from 'react'
import BasicInformation from './components/BasicInformation'
import BasicInformationDisplay from './components/basic/BasicInformationDisplay'
import ToggleEditButton from './components/ToggleEditButton'
import ResetButton from './components/ResetButton'
import PrintButton from './components/PrintButton'
class App extends Component {
  constructor() {
    super()
    this.state = {
      editMode: true,
      fullName: "Your name here",
      email: "placeholder@email.com",
      phone: "1234567890",
      schoolName: "School name here",
      qualification: "Qualification here",
      yearsAttending: [2021, 2021],
      employerName: "Employer name here",
      yearsWorked: [2021, 2021],
      relevantSkills: ["relavant skill here"]
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this)
    this.resetButton = this.resetButton.bind(this)
  }
  handleChange(e) {
    const value = e.target.value
    this.setState({
      ...this.state,
      [e.target.dataset.field]: value
    })
    console.log(this.state)
  }
  resetButton(){
    this.setState({
      editMode: true,
      fullName: "Your name here",
      email: "placeholder@email.com",
      phone: "1234567890",
    })
  }
  toggleEdit(){
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render(){
    const inputMode = 
      <div>
        <BasicInformation 
            name={this.state.fullName}
            email={this.state.email}
            phone={this.state.phone}
            event={this.handleChange}
            editMode={this.state.editMode}/>
      </div>
    const displayMode = 
      <div>
         <BasicInformationDisplay 
          name={this.state.fullName}
          email={this.state.email}
          phone={this.state.phone}/>
          <PrintButton />
      </div>
    
    
    
    
    return (
      <div>  
        {this.state.editMode?inputMode:displayMode}
        <ToggleEditButton toggle={this.toggleEdit}/>
        <ResetButton resetButton={this.resetButton}/>
        
      </div>
    )
   
     
    
  }
}



export default App