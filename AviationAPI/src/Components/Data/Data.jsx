import React, { useEffect } from 'react'
import './Data.css'
import fireBackground from '../../assets/poke-fire-background.jpg'
import waterBackground from '../../assets/poke-water-background.jpg'
import electricBackground from '../../assets/poke-electric-background.jpg'
import grassBackground from '../../assets/poke-grass-background.jpg'
import normalBackground from '../../assets/poke-normal-background.jpg'
import iceBackground from '../../assets/poke-ice-background.png'
import fightingBackground from '../../assets/poke-fighting-background.jpg'
import poisonBackground from '../../assets/poke-poison-background.png'
import groundBackground from '../../assets/poke-ground-background.png'
import psychicBackground from '../../assets/poke-psychic-background.png'
import bugBackground from '../../assets/poke-bug-background.png'
import rockBackground from '../../assets/poke-rock-background.jpg'
import ghostBackground from '../../assets/poke-ghost-background.png'
import dragonBackground from '../../assets/poke-dragon-background.png'
import flyingBackground from '../../assets/poke-flying-background.png'
import darkBackground from '../../assets/poke-dark-background.png'
import steelBackground from '../../assets/poke-steel-background.png'
import fairyBackground from '../../assets/poke-fairy-background.png'
import Sprites from '../Sprites/Sprites'
import PokeMoves from '../PokeMoves/PokeMoves'



function Data({ data, name }) {

    const backgroundSelector = () => {

        if(data.types[0]?.type?.name === 'fire') {
            console.log(data.types + ' is this fire');
            return {
                backgroundImage: `url(${fireBackground})`,
                color: 'white',
            };
        } else if(data.types[0]?.type?.name === 'water'){
            console.log('water type');
            return {
                backgroundImage: `url(${waterBackground})`,
            };
        } else if(data.types[0]?.type?.name === 'electric') {
            return {
                backgroundImage: `url(${electricBackground})`
            };
        } else if(data.types[0]?.type?.name === 'grass') {
            return {
                backgroundImage: `url(${grassBackground})`
            };
        } else if(data.types[0].type.name === 'normal') {
            return {
                backgroundImage: `url(${normalBackground})`
            };
        } else if(data.types[0].type.name === 'ice') {
            return { 
                backgroundImage: `url(${iceBackground})`
            };
        } else if(data.types[0].type.name === 'fighting') {
            return { 
                backgroundImage: `url(${fightingBackground})`
            };
        } else if(data.types[0].type.name === 'poison') {
            return {
                backgroundImage: `url(${poisonBackground})`
            };
        } else if(data.types[0].type.name === 'ground') {
            return {
                backgroundImage: `url(${groundBackground})`
            };
        } else if(data.types[0].type.name === 'psychic') {
            return {
                backgroundImage: `url(${psychicBackground})`
            };
        } else if(data.types[0].type.name === 'bug') {
            return {
                backgroundImage: `url(${bugBackground})`
            };
        } else if(data.types[0].type.name === 'rock') {
            return {
                backgroundImage: `url(${rockBackground})`
            };
        } else if(data.types[0].type.name === 'ghost') {
            return {
                backgroundImage: `url(${ghostBackground})`
            };
        } else if(data.types[0].type.name === 'dragon') {
            return {
                backgroundImage: `url(${dragonBackground})`
            };
        } else if(data.types[0].type.name === 'flying') {
            return {
                backgroundImage: `url(${flyingBackground})`
            };
        } else if(data.types[0].type.name === 'dark') {
            return {
                backgroundImage: `url(${darkBackground})`,
                color: 'white',
            };
        } else if(data.types[0].type.name === 'steel') {
            return {
                backgroundImage: `url(${steelBackground})`
            };
        } else if(data.types[0].type.name === 'fairy') {
            return {
                backgroundImage: `url(${fairyBackground})`
            };
        }
        return {};
    }
        

    function capitalizeWords(str) {
        return str.split(/[\s-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

return (
    <div id='data-parent' style={backgroundSelector()}>

        <div id='name-hp'>
            <h1>{capitalizeWords(data.name)}</h1>
            <h1 id='hp-stat'>
                {data.stats[0].base_stat}
                &nbsp;
                {capitalizeWords(data.stats[0].stat.name)}
            </h1>
        </div>



        {data.types.map((i, index) => 
        <p key={index}>
            {i.types}
        </p>)}

        <Sprites data={data} />
        <PokeMoves data={data} name={name}/>

        {data.stats.map((i, index) => {
            if (index > 0) { 
            return (
                <p className='poke-stats' key={index}>
                    {capitalizeWords(i.stat.name)}: {i.base_stat}
                </p>
                    );
                }
                return null; 
            })}

    </div>
)
};

export default Data