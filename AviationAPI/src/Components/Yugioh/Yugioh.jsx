import React, { useEffect, useState } from 'react'
import Data from '../Data/Data';
import Input from '../Input/Input';
import './Yugioh.css'

function Yugioh() {

    const [ data, setData ] = useState([]);
    const [ name, setName ] = useState('');


    useEffect(() => {
        console.log('use the effect')

        if (name !==''){
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
                .catch(err => console.log(err))
        }
    },[name])

return (
    <>
        <Input setName={setName} data={data} />
        {data == '' ? null : <Data data={data} name={name}/>}
    </>
)
}

export default Yugioh