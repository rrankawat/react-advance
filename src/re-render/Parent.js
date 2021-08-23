import React, { Component } from 'react'
import Message from './Message'

export class Parent extends Component {
  state = { displayMessage: false }

  componentDidMount() {
    this.setState({ displayMessage: true })
  }

  render() {
    console.log('Parent is getting rendered')

    return (
      <div>
        <Message />
      </div>
    )
  }
}

export default Parent
