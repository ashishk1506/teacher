import React, {useState} from 'react'
import styled from 'styled-components'

const TOGGLER_BOX = styled.div`
    width: 2rem;
    height: 1.5rem;
    flex-direction : column;
    justify-content : space-around;
    position: relative;
    cursor: pointer;
    display : none;
 @media (max-width:700px)
 {
     display: flex;
 }
`;

const LINE = styled.div`
    background-color: ${ props => props.status ? 'black' : 'black'};
    height: 4px;
    width: 100%;
    border-radius: 4px;
    transition: all 0.2s ease-in;
    
    &:nth-child(1)
    {
    transform: ${ props => props.status ? 'rotateZ(-45deg) translate(0,11px) ':null};
    }
    &:nth-child(2)
    {
    background-color: ${ props => props.status ? 'transparent' : null};
    transform: ${ props => props.status ? 'translateX(-20px)' : null};
    }
    &:nth-child(3)
    {
    transform: ${ props => props.status ? 'rotateZ(45deg) translate(0,-11px)' : null};
    }
`;

export default function Toggler(props) {
    
    return (
        <React.Fragment>
        <TOGGLER_BOX onClick={props.handler} >
         <LINE status = {props.status}></LINE>
         <LINE status = {props.status}></LINE>
         <LINE status = {props.status}></LINE>
        </TOGGLER_BOX>
        </React.Fragment>
    )
}
