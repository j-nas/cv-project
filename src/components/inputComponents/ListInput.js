import React from 'react'
import uniqid from 'uniqid'

class RelevantSkillsInput extends React.Component {
  constructor(){
    super()
    this.state = {
      listItems: [
        {
          key: uniqid(),
          text: "",
        },
      ]
    }
  }

  onChangeHandler = (e) => {
    const value = e.target.value
    const index = this.state.listItems.findIndex(elem => 
      elem.key === e.target.dataset.field)
    const listItems = [...this.state.listItems]
    listItems[index] = { ...listItems[index], text: value}
    this.setState({ listItems })
    console.log(this.state, index)
  }
  
  addListItem = () => {
    this.setState(prevState => ({
     listItems: [...prevState.listItems, {key: uniqid(), text: ""}]
    }))
  }
  removeListItem = (e) => {
    this.setState(prevState => ({
      listItems: prevState.listItems.filter(item => 
        item.key !== e.target.id)
    }))
  }
  render(){
    
    const listItemInput = this.state.listItems.map(item => {
      return(
        <li key={item.key}>
          <input
            type="text"
            placeholder="Enter Achievements here"
            data-field={item.key}
            onChange={this.onChangeHandler}
            value={item.text}/>
          <button 
            onClick={this.removeListItem}
            id={item.key}>
              Remove
            </button>
        </li>
      ) 
    })
    
    const listItemDisplay = this.state.listItems.map(item => {
      return(
        <li key={item.key}>{item.text}</li>
      )
    })
     
    
    const inputMode = 
      <div>
        <ul>Highlights/Achievements
          <button onClick={this.addListItem}>
            Add 
          </button>
          {listItemInput}
        </ul>
      </div>
    const displayMode = 
      <ul>{listItemDisplay}</ul>
    return(
      <div>
        {this.props.inputMode?inputMode:displayMode}
      </div>
    )
  }
}
export default RelevantSkillsInput