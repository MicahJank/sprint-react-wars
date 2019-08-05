import React from 'react';
import styled from 'styled-components';

const CharElement = styled.div`
    width: 400px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;

`;

const Character = ({ name, eyeColor, hairColor, gender }) => {

    return (
        <CharElement>
            <h3>Name: {name}</h3>
            <h3>Eye Color: {eyeColor}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <h3>Gender: {gender}</h3>
        </CharElement>
    );
};

export default Character;