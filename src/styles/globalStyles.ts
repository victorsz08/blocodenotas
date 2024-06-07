import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;        
    }
    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};        
    }
    h1 {
        color: ${props => props.theme.titles};        
    }
    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.text};
        height: 30px;
    }

    .cl-border {
        border-bottom: 0.2px solid ${props => props.theme.text};
    }

    .note {
       background-color: #FFF;
       color: #000;
    }

    .table {
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.background};
    }

    .table-reference {
        background-color: ${props => props.theme.text};
        color: ${props => props.theme.background};
        font-weight: 800;
    }

    .nt-button {
        background-color: #ff6700;
        color: #FFF;
        border: none;
        border-radius: 1.2rem;
        padding: .6rem 1rem;
        font-weight: 700;
        cursor: pointer;
    }
    .background-accent {
        background-color: ${props => props.theme.accent};
        border: none;
        color: ${props => props.theme.text};
    }

    .box-shadow {
        box-shadow: 0 0 5px ${props => props.theme.shawdow};
    }
    .nt-input {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.text};
        padding: .6rem .8rem;
        border: 1px solid ${props => props.theme.text};
        border-radius: 1.2rem;
        width: 20rem;
        margin-right: 2rem;
    }
`
