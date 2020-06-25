import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const DIV = styled.div`
background-color : orange;
display : flex;
height : 400px;
align-items : center;
justify-content : space-around;
flex-direction : column;

img{
    width: 12rem ;
    height: 12rem ;
    margin-left : 3rem;
}
h3,h5{
  font-size : 1rem;
}
h3{

}
`;

export default function Subjectpic(props) {
 
    return (
      <React.Fragment>
        <DIV className="media">
        <img src={props.logo} alt="ashish"></img>
        <div>
          <h3>{props.name} : {props.code}</h3>
          <h5>Credit : {props.credit} </h5>
          <h5>Semester : {props.semester}</h5>
        </div>
      </DIV>
       <NavLink className="linkbutton" to={{
         pathname: '/Participants',
         state: props.code,
         subject: props.name
       }}
       style={{color: 'black', display:'flex', justifyContent:'center',height:'40px',alignItems:'center'}} >Participants</NavLink>
      </React.Fragment>
    )
}
