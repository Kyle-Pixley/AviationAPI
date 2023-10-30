import React, { useEffect, useState } from 'react'
import './PokeMoves.css'

function PokeMoves({ data, name }) {

  const [ moveData, setMoveData ] = useState([]);
  const [ theMove, setTheMove ] = useState(null);

  function capitalizeWords(str) {
    return str.split(/[\s-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

  useEffect(() => {
    console.log('this is fetch number 2')
    if (name !==''){
      if(theMove !== null){
      console.log(`this is the fetch ${theMove}`)
      fetch(`https://pokeapi.co/api/v2/move/${theMove}/`)
        .then(res => res.json())
        .then(moveData => {
          setMoveData(moveData)
          console.log(moveData)
        })
        .catch(err => console.log(err))
      }
    }
  },[name, theMove])

  const randomMove = () => {
    const numberOfMoves = data.moves.length;
    const moveNumber = Math.floor(Math.random() * numberOfMoves);
    return moveNumber;

  }

  useEffect(() => {
    setTheMove(randomMove());
  }, [name, data.moves])

    console.log(theMove + ' wtf')
    //! flavor_text_entries[0] is undefined

  return (
    <div id='moves-parent'>
      {theMove !== null ? capitalizeWords(data.moves[theMove].move.name) : null}
      {moveData.flavor_text_entries[0].flavor_text}
    </div>  
  )
}

export default PokeMoves