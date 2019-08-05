import React from 'react';
import styled from 'styled-components';


const NextPageButton = ( { clickFunction }) => {


    return (

        <button onClick={clickFunction}>Next Page</button>
    );
};

export default NextPageButton;