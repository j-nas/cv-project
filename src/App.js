import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import BasicInformation from './components/BasicInformation'
import BasicInformationDisplay from './components/basic/BasicInformationDisplay'

class App extends Component {
  constructor() {
    super()
    this.state = {
      editMode: true,
      fullName: "",
      email: "",
      phone: "",
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }
  handleChangeName(e) {
    this.setState({ fullName: e.target.value });
  }
  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleChangePhone(e) {
    this.setState({ phone: e.target.value });
    console.log(this.state)
  }
  resetButton(){
    this.setState({
      editMode: true,
      fullName: "",
      email: "",
      phone: "",
    })
  }
  toggleEdit(){
    this.setState({
      editMode: !this.state.editMode
    })
  }
  render(){
    if(this.state.editMode) {   
      return (
        <div>  
          <BasicInformation 
            name={this.state.fullName}
            nameEvent={this.handleChangeName}
            email={this.state.email}
            emailEvent={this.handleChangeEmail}
            phone={this.state.phone}
            phoneEvent={this.handleChangePhone}
            editMode={this.state.editMode}/>
        </div>
      )
    } else {
      return (
        <div>
          <BasicInformationDisplay />
        </div>
      )
    }
  }
}



export default App