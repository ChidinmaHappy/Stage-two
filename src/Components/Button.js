import styled from 'styled-components'

export const Button = styled.button`
   height: 50px;
    color: white;
    border: none;
    border-radius:11px;
    width: 30%;
    margin: 0 auto;
    cursor: pointer;
    background-color: brown;


/* background-color: ${(props) => props.backgroundcolor}; */

&:hover{
    background-color: blue;
    
}
`;