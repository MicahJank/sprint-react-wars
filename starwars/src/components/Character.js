import React from 'react';
import styled from 'styled-components';

const CharElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 500px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;
    text-align: left;
`;

const CharH3 = styled.h3`
   
`;

const Character = ({ name, eyeColor, hairColor, gender }) => {

    return (
        <CharElement>
            <div>
                <CharH3>Name: {name}</CharH3>
                <CharH3>Eye Color: {eyeColor}</CharH3>
            </div>
            <div>
                <CharH3>Hair Color: {hairColor}</CharH3>
                <CharH3>Gender: {gender}</CharH3>
            </div>
            
        </CharElement>
    );
};

export default Character;