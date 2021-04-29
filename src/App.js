import React, { Component } from 'react'
import uniqid from "uniqid"

import ToggleEditButton from './components/buttons/ToggleEditButton'
import PrintButton from './components/buttons/PrintButton'
import ResetButton from './components/buttons/ResetButton'

import BasicInformation from './components/BasicInformation'
import Education from './components/Education'
import Experience from './components/Experience'

class App extends Component {
  constructor() {
    super()
    this.state = {
      editMode: true,
      schoolInputs: [],
      workInputs: [],
     }
    this.toggleEdit = this.toggleEdit.bind(this)
  }
  toggleEdit(){
    this.setState({
      editMode: !this.state.editMode
    })
  }
  addSection= (e) => {
    this.setState(prevState => ({
      [e.target.dataset.field]: 
        [...prevState[e.target.dataset.field], 
        {key: uniqid()}]
    }))
  }
  deleteSection = (e) => {
    this.setState(prevState => ({
      [e.target.dataset.field]: 
        prevState[e.target.dataset.field].filter(
          item => item.key !== e.target.id
        )
    }))
  }
  render(){
    const printButton = <PrintButton/>
    const { schoolInputs, workInputs } = this.state
    
    let education = schoolInputs.map((edu) => {
        return(
          <div key={edu.key}>
          <Education 
            inputMode={this.state.editMode} 
             />
            <br />
            <button
              data-field="schoolInputs"
              id={edu.key}
              onClick={this.deleteSection}>
              Remove
            </button>
          </div>
     ) })

    let experience = workInputs.map((work) => {
      return(
        <div key={work.key}>
          <Experience
            inputMode={this.state.editMode}
             />
          <button
            data-field="workInputs"
            id={work.key}
            onClick={this.deleteSection}>
            Remove
          </button>
        </div>
      )
    })
    return (
      <div>  
        <BasicInformation 
          inputMode={this.state.editMode}/>
        <h3>Education</h3>
        <button 
          data-field="schoolInputs" 
          onClick={this.addSection}>
          Add
        </button>
        {education}
        <hr/>
        <h3>Experience</h3>
        <button 
          data-field="workInputs" 
          onClick={this.addSection}>
          Add
        </button>
        {experience}
        <hr/>
        <ResetButton />
        <ToggleEditButton toggle={this.toggleEdit}/>
       {!this.state.editMode?printButton:null}
        
      </div>
    )
  }
}
export default App