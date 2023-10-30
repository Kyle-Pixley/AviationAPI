import React from 'react'
import { useState } from 'react';
import './Sprites.css'
import fireSpriteBackground from '../../assets/sprite-fire-background.jpg'
import waterSpriteBackground from '../../assets/sprite-water-background.jpg'
import electricBackground from '../../assets/sprite-electric-background.jpg'
import normalSpriteBackground from '../../assets/sprite-normal-background.jpg'
import iceSpriteBackground from '../../assets/sprite-ice-background.jpg'
import fightingSpriteBackground from '../../assets/sprite-fighting-background.jpg'
import poisonSpriteBackground from '../../assets/sprite-poison-background.jpg'
import groundSpriteBackground from '../../assets/sprite-ground-background.jpg'
import bugSpriteBackground from '../../assets/poke-bug-background.png'

function Sprites({ data }) {

    const [activeSprite, setActiveSprite] = useState('default');

    const handleActiveSprite = (spriteName) => {
        setActiveSprite(spriteName)
    }
    
    const spriteBackgroundSelector = () => {

        if(data.types[0].type.name === 'fire') {
            return {
                backgroundImage: `url(${fireSpriteBackground})`
            };
        } else if (data.types[0].type.name === 'water' || data.types[0].type.name === 'flying' || data.types[0].type.name === 'ghost' || data.types[0].type.name === 'fairy') {
            return {
                backgroundImage: `url(${waterSpriteBackground})`
            };
        } else if (data.types[0].type.name === 'electric') {
            return {
                backgroundImage: `url(${electricBackground})`
            };
        } else if (data.types[0].type.name === 'normal' || data.types[0].type.name === 'steel') {
            return {
                backgroundImage: `url(${normalSpriteBackground})`
            };
        } else if (data.types[0].type.name === 'ice') {
            return {
                backgroundImage: `url(${iceSpriteBackground})`
            };
        } else if(data.types[0].type.name === 'fighting' || data.types[0].type.name === 'rock') {
            return {
                backgroundImage: `url(${fightingSpriteBackground})`
            };
        } else if (data.types[0].type.name === 'poison') {
            return {
                backgroundImage: `url(${poisonSpriteBackground})`
            };
        } else if(data.types[0].type.name === 'ground' || data.types[0].type.name === 'dark') {
            return {
                backgroundImage: `url(${groundSpriteBackground})`
            };
        } else if(data.types[0].type.name === 'bug') {
            return {
                backgroundImage: `url(${electricBackground})`
            };
        } else if(data.types[0].type.name === 'dragon') {
            return {
                backgroundImage: `url(${bugSpriteBackground})`
            }
        }
        return{};
    }

  return (
    <div>
        <div id='buttons-parent'>
            { data.sprites.front_default ? <button className='sprite-buttons' onClick={() => handleActiveSprite('default')} > Default </button> : null }

            { data.sprites.front_shiny ? <button className='sprite-buttons' onClick={() => handleActiveSprite('shiny')} > Shiny </button> : null }

            { data.sprites.front_female ? <button className='sprite-buttons' onClick={() => handleActiveSprite('female')}> Female </button> : null }

            { data.sprites.front_shiny_female ? <button className='sprite-buttons' onClick={() => handleActiveSprite('shiny-female')}> Shiny Female </button> : null }

        </div>
        
        <div id='poke-sprites-container' style={spriteBackgroundSelector()}>

        {activeSprite === 'default' && <img id='sprite-image' src={data.sprites.front_default} alt='Default Sprite' />}
        {activeSprite === 'shiny' && <img id='sprite-image' src={data.sprites.front_shiny} alt='Shiny Sprite' />}
        {activeSprite === 'female' && <img id='sprite-image' src={data.sprites.front_female} alt='Female Sprite' />}
        {activeSprite === 'shiny-female' && <img id='sprite-image' src={data.sprites.front_shiny_female} alt='Shiny Female' />}

        </div>
    </div>
  )
}

export default Sprites