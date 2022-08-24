import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    
    :root {
        --blue-color: #4d66d4;
        --grey-color: #cecece
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
    }

`
        