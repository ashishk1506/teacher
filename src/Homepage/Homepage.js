import React from 'react'
import styled from 'styled-components';

const DIV =styled.div`
background: url("https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?cs=srgb&dl=alphabet-class-conceptual-cube-301926.jpg&fm=jpg");
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100%;
top: 60px;
position:fixed;
`;
export default function Homepage() {
    return (
        <React.Fragment>
        <DIV>
        </DIV>
        </React.Fragment>
    )
}
