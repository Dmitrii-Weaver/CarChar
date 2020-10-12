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
      chargingIsOn: false,
      searchResult: []
      
    }
  }
  componentDidMount(){

      axios.get('http://localhost:4000/data2')
    
      .then((response) => {
        this.setState({ items: response.data })
        this.setState({searchResult: response.data})
      });
  }

  SetSelectedCharger = (parameter) => {
    this.setState({SelectedCharger: parameter})
  }

  SetChargingIsOn = (parameter) => {
    this.setState({chargingIsOn: parameter})
  }

  SetSearchResult = (parameter) => {
    this.setState({searchResult: parameter})
  }



  render() {
    return (    
      
      <Router history={history}>

        <Route path="/" exact component={Login} />
        <Route path="/content" render={(props) => <Contentbox 
        items={this.state.items} 
        chargingIsOn={this.state.chargingIsOn} 
        SetChargingIsOn={this.SetChargingIsOn}
         SetSelectedCharger={this.SetSelectedCharger} 
         SelectedCharger={this.state.SelectedCharger}
         SetSearchResult={this.SetSearchResult}
         searchResult={this.state.searchResult}
         /> } />      
        
      </Router>
      
    )
  }
}

export default App;
