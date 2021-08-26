import React from 'react'
import Person from './error-boundary/Person'
import ClickCounter from './error-boundary/ClickCounter'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from './error-boundary/Fallback'

const App = () => {
  const person = {
    firstName: 'Bruce',
    lastName: 'Wayne',
  }

  const errorHandler = (error, errorInfo) => {
    console.log('Logging', error, errorInfo)
  }

  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Person person={person} />
        {/* <Person person={{}} /> */}
        <ClickCounter />
      </ErrorBoundary>
    </div>
  )
}

export default App
