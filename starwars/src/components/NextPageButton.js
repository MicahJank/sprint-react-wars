import React from 'react';
import styled from 'styled-components';

const NextPage = styled.button`
    padding: 5px 20px;
    margin: 30px;
    border: none;
    background-color: #DED2C2;
    border-radius: 10px;
    box-shadow: 0px 0px 18px 0px rgba(0,0,0,0.75);
    cursor: pointer;
`;

const NextPageButton = ( { clickFunction }) => {


    return (

        <NextPage onClick={clickFunction}>Next Page</NextPage>
    );
};

export default NextPageButton;