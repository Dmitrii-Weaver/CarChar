import React, { Component } from 'react';
import axios from 'axios';
import Contentbox from "./components/contentbox.js"
import Login from './components/login.js'
import history from './history.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoggedIn : false,
      SelectedCharger: null,
      chargingIsOn: false
      
    }
  }
  componentDidMount(){

      axios.get('http://http://54.82.112.239//data2')
    
      .then((response) => {
        this.setState({ items: response.data })
      });
  }

  SetSelectedCharger = (parameter) => {
    this.setState({SelectedCharger: parameter})
  }

  SetChargingIsOn = (parameter) => {
    this.setState({chargingIsOn: parameter})
  }



  render() {
    return (    
      
      <Router history={history}>

        <Route path="/" exact component={Login} />
        <Route path="/content" render={(props) => <Contentbox items={this.state.items} 
        chargingIsOn={this.state.chargingIsOn} 
        SetChargingIsOn={this.SetChargingIsOn}
         SetSelectedCharger={this.SetSelectedCharger} 
         SelectedCharger={this.state.SelectedCharger}/> } />      
        
      </Router>
      
    )
  }
}

export default App;
