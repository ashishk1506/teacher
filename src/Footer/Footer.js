import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
background-color : #222f3e;
color : whitesmoke;
font-size : 0.8rem;
height : auto;
min-height : 30px;
bottom : 0;
position : fixed;
display : flex;
justify-content : center;
align-items : center;
opacity : 0.4;
`;

export default function Footer() {
    return (
        <Div className="container-fluid">
            Made with React.js in Bokaro Steel City.
        </Div>
    )
}
