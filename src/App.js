import React, { Component } from 'react'
import BasicInformation from './components/BasicInformation'
import Display from './components/Display'
import ToggleEditButton from './components/ToggleEditButton'
import ResetButton from './components/ResetButton'
import PrintButton from './components/PrintButton'
import Education from './components/Education'
import Experience from './components/Experience'
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
      yearSchoolStart: "Start date",
      yearSchoolComplete: "Finish Date",
      employerName: "Employer name here",
      yearWorkStart: "",
      yearWorkComplete: "",
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
      schoolName: "School name here",
      qualification: "Qualification here",
      yearSchoolStart: "Start date",
      yearSchoolComplete: "Finish Date",
      employerName: "Employer name here",
      yearWorkStart: "",
      yearWorkComplete: "",
      relevantSkills: [],
    })
  }
  toggleEdit(){
    this.setState({
      editMode: !this.state.editMode
    })
  }
  newSkill(e){
    this.setState({
      ...this.state.relevantSkills.push(e.target.value)
      
    })
  }
  render(){
    const inputMode = 
      <div>
        <BasicInformation 
          stateData={this.state}
          event={this.handleChange}/>
        <Education 
          stateData={this.state}
          event={this.handleChange}/>
        <Experience
          stateData={this.state}
          event={this.handleChange} />
      </div>
    const displayMode = 
      <div>
        <Display 
          stateData={this.state}/>
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