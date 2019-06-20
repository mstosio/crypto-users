import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: center;
        background-color: #f9fbfd;
    }
    html {
        box-sizing: border-box;
    }
    *, *::before, *::after {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
