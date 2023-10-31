import React, { useEffect, useState } from 'react'
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

  return (
    <div>
        {bio ? (
            <p id='bio'>{bio.flavor_text_entries[0].flavor_text}</p>
        ) : null}
    </div>
  )
}

export default Bio