import React, { useEffect, useState } from 'react'
import Evolution from '../Evolution/Evolution';
import './Bio.css'

function Bio({ data, moveData, name }) {

    const [ bio, setBio ] = useState(null);

    useEffect(() => {
        fetch(data.species.url)
            .then(res => res.json())
            .then(bio => {
                setBio(bio)
            })
            .catch(err => {
                console.log(err);
            });
    }, [moveData])

    const isBioEnglish = () => {
        if(bio.flavor_text_entries[0].language.name === 'en') {
            return bio.flavor_text_entries[0].flavor_text
        } else if(bio.flavor_text_entries[1].language.name) {
            return bio.flavor_text_entries[1].flavor_text
        } else return bio.flavor_text_entries[2].flavor_text
    }

  return (
    <div>
    {bio ? (
        <div>
            <p id='bio'>{isBioEnglish()}</p>
            <Evolution bio={bio} name={name} />
        </div>
    ) : (
        <p>Loading bio data...</p>
    )}
    </div>
  )
}

export default Bio