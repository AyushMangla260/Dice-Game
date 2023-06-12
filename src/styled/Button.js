import styled from "styled-components";

export const Button = styled.button`
/* Auto layout */

padding: 10px 18px;
border: none;
color: white;
min-width: 220px;
background: #000000;
border-radius: 5px;
font-size: 16px;
border: 1px solid transparent;
cursor: pointer;
transition: 0.4s background ease-in;
&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}

`;

export const OutlineButton = styled(Button)`
/* Auto layout */
background-color: white;
border: 1px solid black;
color: black;

&:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
}

`;