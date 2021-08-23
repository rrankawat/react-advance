import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component {
  state = {
    name: 'John',
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'John' })
    }, 2000)
  }

  render() {
    console.log('------- Parent Component Called -------')

    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
