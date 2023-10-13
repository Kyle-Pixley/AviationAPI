import { useState } from 'react';
import Input from './Components/Input/Input';
import FlightFinder from './Components/FlightFinder/FlightFinder';
import './App.css'

function App() {

  const [ flightNumber, setFlightNumber ] = useState('');

  return (
    <>
      <Input setFlightNumber={setFlightNumber} />
      <FlightFinder flightNumber={flightNumber} />
    </>
  )
}

export default App
