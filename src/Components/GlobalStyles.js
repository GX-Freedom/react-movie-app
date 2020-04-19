import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyled = createGlobalStyle`
    ${reset};
    a{
        list-style:none;
        text-decoration:none;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        font-size:16px;
    }
    body{
        font-size:14px;
        background-color:#130f40;
        color:white;
        padding-top:55px;
        height:100%;
        width:100%;
        
    }
        
    ::-webkit-scrollbar { 
        width: 10px; 
        z-index:-100;
    }
    ::-webkit-scrollbar-track { 
        background-color: #6D214F;
        z-index:-100;
        &:hover{
            background-color: #1B9CFC;
        }
    }
    
    ::-webkit-scrollbar-thumb { 
        z-index:-100;

        background: #FC427B;
        border-radius:10px; }
    ::-webkit-scrollbar-thumb:hover { background: #FD7272;  }
    ::-webkit-scrollbar-thumb:active { background: #F97F51; }
    ::-webkit-scrollbar-button { 
        display: none;                 
        z-index:-100;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    border: 1px solid green;
    -webkit-text-fill-color: green;
    transition: background-color 5000s ease-in-out 0s;
    }
`;

export default GlobalStyled;