import React, { useState, useEffect } from 'react';

const API_URL = "https://rickandmortyapi.com/api/character";

function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json() )
        .then(data => setCharacters(data.results))
    }, []);

  return (
    <div className='Characters'>
        {characters.map(character => (
            <h2 key={character.name}>
                {character.name}
            </h2>
        ))}
    </div>
  )
}
 
export { Characters };