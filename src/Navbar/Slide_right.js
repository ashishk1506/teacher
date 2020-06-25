import React from 'react'
import styled from 'styled-components';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faBookReader , faUser } from '@fortawesome/free-solid-svg-icons';
import { Link} from "react-router-dom";

const UL = styled.ul`
img{
    display : none;
}
li1,li2{
    display : none;
}
@media (max-width:700px)
{  
    display : flex;
    flex-direction : column ;
    justify-content : space-around;
    background: linear-gradient(105deg, #dfe6e9 80%, #192a56 20%);
    width: 100%;
    overflow-x:hidden;
    top : 0;
    left : 0;
    height : 100vh;
    position : fixed;
    transform : ${props => props.status ? 'translateX(-100px)':'translateX(-500px)'};
    transition : all 0.3s ease-in;
    padding-top : 1.5rem;
    padding-bottom : 3.5rem;
    z-index : 1000000;
    opacity : 0.9;
    img{
        margin-left : 80px;
        display : block;
    }
    li1{
        margin-left : 250px;
        color : #192a56;
        display : block;
    }
    li2{
        margin-left : 180px;
        color : #192a56;
        display : block;
    }
}`;

 const Slide_right = (props) => {
    return (
        
        <UL status={props.status}>
         <img src={logo} width='120' height='120'></img>
         <li1><FontAwesomeIcon icon={faHome} /> <Link className="styledbutton" to='/Homepage'> Home </Link></li1>
         <li2><FontAwesomeIcon icon={faBookReader} /><Link className="styledbutton" to='/Subjectpage'>Subjects </Link></li2>
        </UL>
       
    )
}

export default Slide_right ;