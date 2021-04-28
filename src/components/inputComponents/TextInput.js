import React from "react"

class TextInput extends React.Component{
  render(){
    return(
      <div>
        <form action="#">
          <label >{this.props.inputTitle} </label>
          <input 
            type="text"
            data-field={this.props.dataset}
            onChange={this.props.event}
            value={this.props.input}/>
        </form>
      </div>
    )
  }
}
export default TextInput