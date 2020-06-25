import React from 'react'
import logo from './logo.png';
import Toggler from './Toggler';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faBookReader } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import '../index.css';

const DIV = styled.nav`
  display : flex;
  border-bottom : 1px solid #b2bec3 ;
  justify-content : space-between;
  width : 100%;
  height : 60px;
  background-color : #dfe6e9 ;
  padding : 0 20px;
  align-items : center;
  opacity : 0.8;
`;

const Div = styled.div`
font-weight : 400;
color : #192a56;
font-size : 20px;
justify-content : center;

span{
  margin-left : 20px;
  z-index : 1000;
}
`;
const UL = styled.ul`
list-style : none;
display : flex;
height : 100%;
margin : 0;
width : auto;
padding : 0;
flex-wrap : nowrap;
align-items : center;
justify-content: center; 
font-size : 1.2rem;
@media (max-width:700px)
{
  display:none;
}

li1, li2, li3{
    color : #192a56;
    margin : 0 20px;
    cursor : pointer;
    position: relative;
}
`;

export default function Navbar(props) {
    return (
        <DIV>
        <Div><img src={logo} width='60' height='60' alt="pic"></img>
        <span>Teacher's Assessment</span>
        </Div>
         <div>
         <UL>
         <li1><FontAwesomeIcon icon={faHome} /> <Link to='/teacher' className="styledbutton"> Home </Link></li1>
         <li2><FontAwesomeIcon icon={faBookReader} /><Link to='/Subjectpage' className="styledbutton">Subjects </Link></li2>
        </UL>
         </div>
        <Toggler handler={props.handler} status={props.status}/>
        </DIV>  
    )
}
