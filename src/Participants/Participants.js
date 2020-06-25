import React from 'react';
import {useLocation} from 'react-router';
import {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

const Container = styled.div`
 border-radius : 8px;
 background-color : #ecf0f1;
`;
const Row1 = styled.div`
background-color : #192a56;
color : whitesmoke;
border-radius : 8px;
justify-content : center;
align-items : center;
min-height : 3rem;
`;
const Row2 = styled.div`
min-height : 2rem;
background-color : #bdc3c7;
`;
const Span = styled.div`
 color : white;
 font-size : 1.1rem;
 display : flex;
 justify-content : center;
`;
const Row3 = styled.div`
justify-content: center;
align-items:center;
`;
const Ul = styled.ul`
list-style: none;
li{
    border-bottom: 1px solid white;
    margin-bottom: 6px;
}
`;
const Row4 = styled.div`
button{
    display: block;
    width: 100%;
    background-color: #bdc3c7;
    border: none;
    color: white;
    border-radius: 5px;
`;
const Li = styled.li`
color: grey;
font-size: 1rem;
`;
export default function Participants(props) {
const location = useLocation();

const CH31009 = [{name: 'Ashish Kumar', roll: '16CH3001'},{name: 'Abha Kumari', roll: '16CH30029'},
                {name: 'Anjali Roy', roll: '16CH30079'},{name: 'Arvind Kumar', roll: '16CH3009'},
                {name: 'Sanjay Mahto', roll: '16CH30012'},{name: 'Sweta Kumari', roll: '16CH30078'}]; 
const CH20001 = [{name: 'Priti', roll: '16CH30034'},{name: 'Yash Barnwal', roll: '16CH30056'},
                {name: 'Piyush', roll: '16CH30090'},{name: 'Athar Hussain', roll: '16CH30039'},
                {name: 'Helena', roll: '16CH30068'},{name: 'Julyana', roll: '16CH30083'}];
const CH30013 = [{name: 'Hunter Kenway', roll: '16CH30071'},{name: 'Beast Noo', roll: '16CH30023'},
                {name: 'LonePirate', roll: '16CH30050'},{name: 'Viper', roll: '16CH3008'},
                {name: 'JhonyKaru', roll: '16CH30040'},{name: 'Kimpossible', roll: '16CH30023'}];
const CH21004 = [{name: 'pauDave', roll: '16CH30021'},{name: 'Devin', roll: '16CH30029'},
                {name: 'Windychick', roll: '16CH30067'},{name: 'Sanky', roll: '16CH30029'},
                {name: 'Kingslayer', roll: '16CH30029'},{name: 'Aayush Singh', roll: '16CH30088'}];                  
const CH31001 = [{name: 'Bhaiyaji Nilu', roll: '16CH30029'},{name: 'Daniel', roll: '16CH30049'},
                {name: 'Coal Mafia', roll: '16CH30029'},{name: 'Jacob Frye', roll: '16CH30046'},
                {name: 'Evie Frye', roll: '16CH30029'},{name: 'Necrofrezzin', roll: '16CH30058'}];

const array = location.state === 'CH31009' ? 
              CH31009 : location.state === 'CH20001' ? 
              CH20001 : location.state === 'CH30013' ?
              CH30013 : location.state === 'CH21004' ?
              CH21004 : CH31001;
const deleteHandler = (i) =>
              {   
                  alert(array[i].name+" will be deleted");
                  array.splice(i,1);
                  setlist(array.map((name,index) => <li key={index}>{name.name}</li>));
                  setroll(array.map((name,index) => <li key={index}>{name.roll}</li>));
                  setdel(array.map((name,index) => <Li onClick={() => deleteHandler(index)}><FontAwesomeIcon icon={faTrash} /></Li>));
              }
const addList = () => {
  setlist(array.map((name,index) => <li key={index}>{name.name}</li>));
  setroll(array.map((name,index) => <li key={index}>{name.roll}</li>));
  setdel(array.map((name,index) => <Li onClick={() => deleteHandler(index)}><FontAwesomeIcon icon={faTrash} /></Li>));
}

const [list, setlist] = useState([]);
const [roll, setroll] = useState([]);
const [del, setdel] = useState([]);
return (<React.Fragment>
        <Container className = "container mt-4">
            <Row1 className="row">
               <h3>{location.subject}</h3>
            </Row1>
            <Row2 className="row mt-2">
                <div className="col-md-6 col-6 border-right">
                   <Span>Participant's Name</Span>
                </div>
                <div className="col-md-4 col-4 border-right">
                   <Span>Participant's Roll</Span>
                </div>
                <div className="col-md-2 col-2 border-right">
                   <Span>Edit</Span>
                </div>
            </Row2>
            <Row3 className="row mt-2">
                <div className="col-md-6 col-6 border-right">
                     <Ul>
                     {list}
                     </Ul>
                </div>
                <div className="col-md-4 col-4 border-right">
                      <Ul>
                      {roll}
                      </Ul>
                </div>
                <div className="col-md-2 col-2 border-right">
                     <Ul>
                     {del}
                     </Ul>
                </div>
            </Row3>
            <Row4 className="row">
               <button onClick={addList}>Add All Participants</button>
            </Row4>
        </Container>
        <Footer/>
        </React.Fragment>
    )
}
