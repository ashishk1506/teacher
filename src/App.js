import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import styled from 'styled-components';
import Subjectpage from './Subject/Subjectpage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from './Homepage/Homepage';
import Participants from './Participants/Participants';
import Footer from './Footer/Footer';
import Slide_right from './Navbar/Slide_right';

const DIV = styled.div`
margin : 0;
padding : 0;
height : 100%;
`;


class App extends Component {
state = {
  slider : false
}
clickHandler = () => {
  this.setState((prevState) => {
  return{slider : !prevState.slider}})
}
  render() {
    
    return (
     
      <DIV>
      <Router>
      <Navbar handler={this.clickHandler} status={this.state.slider}/>
      <Slide_right status={this.state.slider}/>
       <Switch>
         <Route exact path='/teacher' component={Homepage}/>
         <Route exact path='/Subjectpage' component={Subjectpage}/>
         <Route exact path='/Participants' component={Participants}/>
        </Switch>
      </Router>
      <Footer/>
      </DIV>
    )
  }
}
export default App;
