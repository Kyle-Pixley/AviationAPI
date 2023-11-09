import React, {useEffect, useState} from 'react'
import './Evolution.css'

function Evolution({ bio, name }) {

    const [ evolutionChain, setEvolutionChain ] = useState(null);

    useEffect(() => {
        if (bio) {
            fetch(bio.evolution_chain.url)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then((evolutionChain) => {
                    setEvolutionChain(evolutionChain);
                })
                .catch((err) => {
                    console.error('Error fetching evolution chain:', err);
                });
        }
    }, [bio]);

    function capitalizeWords(str) {
        return str.split(/[\s-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    // function displayEvolutionChain(name) {
    //     if(evolutionChain &&
    //         evolutionChain.chain &&
    //         evolutionChain.chain.evolves_to[0] &&
    //         evolutionChain.chain.evolves_to[0].evolves_to[0] && evolutionChain.chain.evolves_to[0].evolves_to[0].species.name !== name) {
    //             return <p>Evolves Into: &nbsp;{capitalizeWords(evolutionChain.chain.evolves_to[0].evolves_to[0].species.name)}
    //             </p> 
    //         } else if(evolutionChain.chain.evolves_to[0].evolves_to[0].species.name === 'pichu'){ 
    //             return <p>Evolves Into: Pikachu</p>
    //         } else return null;
    // }

    
        function displayEvolutionChain(name) {
            if(name === 'poliwhirl') {
                return (
                    <div id='evolution-parent'>
                        <p>Evolves To: Poliwrath or Politoed</p>
                    </div>
                )
            } else if(name === 'applin') {
                return (
                    <div id='evolution-parent'>
                        <p>Evolves To: Flapple or Appletun</p>
                    </div>
                )
            }else if(name === 'eevee') {
                return (
                    <div id='evolution-parent'>
                        <p>Evolves To: A lot</p>
                    </div>
                )
            } else if(evolutionChain &&
            evolutionChain.chain &&
            evolutionChain.chain.evolves_to[0] &&
            evolutionChain.chain.evolves_to[0].evolves_to[0] && evolutionChain.chain.evolves_to[0].evolves_to[0].species.name !== name) {

                if(evolutionChain.chain.species.name === name) {
                    return (
                        <div id='evolution-parent'>
                            <p>Evolves To: &nbsp;</p>
                            {capitalizeWords(evolutionChain.chain.evolves_to[0].species.name)}
                        </div>
                    )
                } else if (evolutionChain.chain.evolves_to[0].species.name === name) {
                    return (
                        <div id='evolution-parent'>
                            <p>Evolves To: &nbsp;</p>
                            {evolutionChain.chain.evolves_to[0].evolves_to[0].species.name}
                        </div>
                    )
                } else if (evolutionChain.chain.evolves_to[0].evolves_to[0].species.name === name) {
                    return null
                }
            }
        };
    //todo add rockruff and probably others this might be time consuming

  return    (
    <div>
        {displayEvolutionChain(name)}
    </div>
  )
}

export default Evolution