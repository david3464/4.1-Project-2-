import React, { Component } from 'react'

export default class Todolist extends Component {
  render() {
    return (
      <div><input /><button>Submit</button></div>
      <ul>
        <li>learn english</li>
        <li>learn react</li>
      </ul>
    )
  }
}
