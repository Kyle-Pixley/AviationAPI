import React, { useEffect, useState } from 'react'
import './Input.css'

function Input({ setName, data }) {


    const [ pokemonName, setPokemonName ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const name = pokemonName;
        setName(name);
    }
    

    const handleClassName = () => {
        if(data.length !== 0){
            console.log('input-container-data')
            return 'input-container-data'
        } else {
            console.log('input-container-no-data')
            return 'input-container-no-data'
        }
    }

    const handleFormClass = () => {
        if(data.length !== 0){
            return 'form-container-data'
        } else {
            return 'form-container-no-data'
        }
    }

  return (
    <div id='input-parent-1' className={handleClassName()}>
        <form id='form-container-1' className={handleFormClass()} onSubmit={handleSubmit}>

            <input 
            id='name-input-1'
            type='text' 
            placeholder='Enter Pokemon Name' 
            value={pokemonName} 
            onChange={(e) => setPokemonName(e.target.value)}/>

            <button 
            id='form-button-1'
            type='submit'>Search</button>

        </form>
        {data.length === 0 ? <p id='credit-to-pokeapi'>Created Using: <a id='pokeapi-link' href='https://pokeapi.co/'>https://pokeapi.co/</a></p> : null}
    </div>
  )
}

export default Input