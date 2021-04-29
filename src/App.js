import React, { Component } from 'react'

import ToggleEditButton from './components/buttons/ToggleEditButton'
import PrintButton from './components/buttons/PrintButton'
import BasicInformation from './components/BasicInformation'
import Education from './components/Education'
import Experience from './components/Experience'
class App extends Component {
  constructor() {
    super()
    this.state = {
      editMode: true,
     }
    this.toggleEdit = this.toggleEdit.bind(this)
  }
  toggleEdit(){
    this.setState({
      editMode: !this.state.editMode
    })
  }
  render(){
    const printButton = <PrintButton/>
    return (
      <div>  
        <BasicInformation 
          inputMode={this.state.editMode}/>
        <Education 
          inputMode={this.state.editMode}/>
        <Experience
          inputMode={this.state.editMode}/>
        <ToggleEditButton toggle={this.toggleEdit}/>
       {!this.state.editMode?printButton:null}
        
      </div>
    )
  }
}
export default App