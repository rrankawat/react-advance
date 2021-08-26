import React from 'react'

const Person = ({ person }) => {
  return (
    <div>
      <h1>
        Hello {person.firstName.toUpperCase()} {person.lastName.toUpperCase()}
      </h1>
    </div>
  )
}

export default Person
