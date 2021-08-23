import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends Component {
    state = {
      count: 0,
    }

    incrementCount = () =>
      this.setState(prevState => ({ count: prevState.count + incrementNumber }))

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      )
    }
  }

  return NewComponent
}

export default UpdatedComponent
