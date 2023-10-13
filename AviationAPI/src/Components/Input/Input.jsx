import React from 'react'
import './input.css'

function Input({ setFlightNumber }) {

    function handleClick(e) {
        setFlightNumber(e.target.previousSibling.value)
    }

  return (
    <div>
        <input type='text' placeholder='Enter Flight Number'/>
        <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default Input