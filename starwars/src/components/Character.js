import React from 'react';
import styled, { css } from 'styled-components';

import { GiLightSabers } from 'react-icons/gi';
import background from '../starwarsPlanet.jpeg';

const CharElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 500px;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;
    text-align: left;
    background-image: url(${background});
    background-size: 100%;
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
`;

const CharH3 = styled.h3`
    
`;

const Icon = styled.i`
    color: ${props => (props.green ? "green" : props.red ? "red" : props.blue ? "blue" : "yellow")}
    font-size: 1.5rem;
    
`;

const Character = ({ name, eyeColor, hairColor, gender }) => {

    return (
        <CharElement>
            <div>
                
                <CharH3><Icon green><GiLightSabers /></Icon> Name: {name}</CharH3>
                <CharH3><Icon red><GiLightSabers /></Icon> Eye Color: {eyeColor}</CharH3>
            </div>
            <div>
                <CharH3><Icon blue><GiLightSabers /></Icon> Hair Color: {hairColor}</CharH3>
                <CharH3><Icon><GiLightSabers /></Icon> Gender: {gender}</CharH3>
            </div>
            
        </CharElement>
    );
};

export default Character;