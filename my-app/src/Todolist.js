import React, { Component, Fragment } from 'react';
import './style.css'

export default class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
           {/* 下面是input框 */}
          <input 
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)}>Submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return <li key={index} onClick={this.handleItemDelete.bind(this,index)}>{item}</li>;
            })
          }
        </ul>
      </Fragment>     
    )
  }

  handleInputChange(e){
    this.setState({
      inputValue:e.target.value    

    })
    // console.log(e.target.value);
  }
  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })

  }
}
