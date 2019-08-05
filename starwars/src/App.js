import React, { useState, useEffect } from 'react';
import './App.css';

import Character from './components/Character.js';
import NextPageButton from './components/NextPageButton.js';

import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  const [nextPage, setNextPage] = useState(1);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {

    const fetchData = () => {
      axios.get(`https://swapi.co/api/people/?page=${nextPage}`)
      .then(dataObj => {
        console.log('dataObj', dataObj);

        setCharacters(dataObj.data.results); // characters is now an array of people
      })

      .catch(err => {
        alert(err);
      });
    }

    fetchData();
    

  }, [nextPage]);


  const handleChange = () => {
    setNextPage(nextPage + 1);
  }


  console.log('dataObj.data.results', characters);
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        {
          characters.map((character, i) => {
            return <Character key={i} name={character.name} eyeColor={character.eye_color} hairColor={character.hair_color} gender={character.gender} />
          })
        }
      </div>
      <NextPageButton clickFunction={handleChange}/>
    </div>
  );
}

export default App;
