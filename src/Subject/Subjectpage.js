import React , {useState} from 'react'
import styled from 'styled-components';
import Subject_pic from './Subject_pic';
import logo1 from './Reactionenginneringlogo.jpg';
import logo2 from './Fluidmechanicslogo.jpg';
import logo3 from './Chemicalprocesstechnologylogo.jpg';
import logo4 from './Heattransferlogo.jpg';
import logo5 from './Masstransferlogo.png';
import Footer from '../Footer/Footer';

const Div1 = styled.div`
background-color : #192a56;
display : flex;
flex-direction : column;
justify-content : space-around;
font-size : 1rem;
align-items : center;
color : white;
border-radius : 10px;
font-weight : 500;
`;

const BUTTON = styled.button`
display : block;
background : transparent;
opacity : 0.6;
color : white;
font-size : 0.8rem;
box-shadow: 0 8px 6px -6px black;
border : 10px;
border-radius : 5px;
min-height : 60px;
min-width : 100%;
transition : all 0.3s ease;
font-weight : 600;
&:hover{
  box-shadow : none;
}
`;

const Div2 = styled.div`
border-left : 2px solid #192a56;
`;

const Subjectpage = () => {
    const subjects = [{name: "Reaction Enginnering", code: "CH31009", credit: 4, semester: "Autumn", logo: logo1, order:0}, 
    {name: "Fluid Mechanics", code: "CH20001", credit: 4, semester: "Autumn", logo: logo2, order:1}, 
    {name: "Chemical Process Technology ", code: "CH30013", credit: 3, semester: "Spring", logo: logo3, order:3},
    {name: "Heat Transfer", code: "CH21004", credit: 4, semester: "Spring", logo: logo4, order:4},
    {name: "Mass Transfer", code: "CH31001", credit: 4, semester: "Autumn", logo: logo5, order:5}]
   
    const [start, setstart] = useState(0);
    const subjectsname_mapped = subjects.map((names,index) => {
      return( <BUTTON onClick={() => setstart(index)} key={index}>{names.name} ({names.code})</BUTTON>)});

    return (
           <React.Fragment>
            <div className = "container-fluid border mt-3">
              <div className = "row">
                  <Div1 className = "col-md-5 border col-4">
                    SUBJECTS
                  </Div1>
                  <Div1 className = "col-md-7 border col-8">
                    SUBJECT-DETAILS
                  </Div1>
              </div>

              <div className = "row">
                  <Div1 className = "col-md-5 border col-4 mt-2">
          
                    {subjectsname_mapped}
                    
                  </Div1>
                  <Div2 className = "col-md-7 col-8 ">
                    {
                      subjects.slice(start, start+1 ).map((names,index) => {
                        return(<Subject_pic name={names.name} 
                          code={names.code} 
                          semester={names.semester}
                           credit={names.credit} 
                           logo={names.logo}
                           order={names.order}
                           key={index}/>)
                      })
                    }
                    
                  </Div2>
              </div>
            </div>
          </React.Fragment>
    )
}
export default Subjectpage;