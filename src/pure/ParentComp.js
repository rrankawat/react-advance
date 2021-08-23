import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

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
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
