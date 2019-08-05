import React from 'react';
import styled from 'styled-components';

const CharElement = styled.div`
    width: 200px;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;

`;

const Character = ({ name, eyeColor, hairColor, gender }) => {

    return (
        <CharElement>

        </CharElement>
    );
};

export default Character;