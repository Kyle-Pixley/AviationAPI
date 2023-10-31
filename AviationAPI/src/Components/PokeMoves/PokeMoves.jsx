import React, { useEffect, useState, useRef } from 'react'
import Bio from '../Bio/Bio';
import './PokeMoves.css'

function PokeMoves({ data, name }) {

  const [ moveData, setMoveData ] = useState(null);
  const [ secondMoveData, setSecondMoveData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  const randomMoveRef = useRef(null);
  

  function capitalizeWords(str) {
    return str.split(/[\s-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

  function getRandomNumber() {
    return Math.floor(Math.random() * data.moves.length)
  }
  

  useEffect(() => {
    
    if (name !==''){

      setIsLoading(true);

      randomMoveRef.current = getRandomNumber();

      fetch(data.moves[randomMoveRef.current].move.url)
        .then(res => res.json())
        .then(moveData => {
          setMoveData(moveData)
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false)
        })
    }

    if(name !== '' && data.moves.length > 1){
      console.log("this is the start of the second move fetch "+data.moves.length)
      let randomMoveTwo;
      do {
        randomMoveTwo = getRandomNumber();
      } while (randomMoveTwo === randomMoveRef.current);

      fetch(data.moves[randomMoveTwo].move.url)
        .then(res => res.json())
        .then(secondMoveData => {
          setSecondMoveData(secondMoveData)
        })
        .catch(err => {
          console.log(err);
        })
    }
  },[data])

  const isEnglish = () => {
    if(moveData.flavor_text_entries[0].language.name === 'en'){
      return moveData.flavor_text_entries[0].flavor_text
    } else if(moveData.flavor_text_entries[1].language.name === 'en'){
      return moveData.flavor_text_entries[1].flavor_text
    } else if(moveData.flavor_text_entries[2].language.name === 'en'){
      return moveData.flavor_text_entries[2].flavor_text
    } else return moveData.flavor_text_entries[3].flavor_text
  }

  const isTwoEnglish = () => {
    if(secondMoveData.flavor_text_entries[0].language.name === 'en'){
      return secondMoveData.flavor_text_entries[0].flavor_text
    } else if(secondMoveData.flavor_text_entries[1].language.name === 'en'){
      return secondMoveData.flavor_text_entries[1].flavor_text
    } else if(secondMoveData.flavor_text_entries[2].language.name === 'en'){
      return secondMoveData.flavor_text_entries[2].flavor_text
    } else return secondMoveData.flavor_text_entries[3].flavor_text
  }

  return (
    <div id='moves-parent'>
      {moveData ? (
        <div id='move-parent'>
          <p id='move'><h1 id='move-name'>{capitalizeWords(moveData.name)}</h1>{isEnglish()}</p>
        </div>
      ) : null}
      <div id='move-divider'></div>
      {secondMoveData ? (
        <div id='second-move-parent'>
          <p id='second-move'><h1 id='second-move-name'>{capitalizeWords(secondMoveData.name)}</h1>{isTwoEnglish()}</p>
        </div>
      ) : null}
      <Bio data={data} moveData={moveData} name={name} />
    </div>  
  )
}

export default PokeMoves