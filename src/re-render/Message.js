import React, { Component } from 'react'

export class Message extends Component {
  state = { message: 'Hello world' }

  shouldComponentUpdate() {
    console.log('Does not get rendered')
    return false
  }

  render() {
    console.log('Child is rendered')

    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default Message
