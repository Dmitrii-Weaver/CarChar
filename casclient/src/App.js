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
      SelectedCharger: null
      
    }
  }
  componentDidMount(){

      axios.get('http://localhost:4000/data2')
    
      .then((response) => {
        this.setState({ items: response.data })
      });
  }

  SetSelectedCharger = (parameter) => {
    this.setState({SelectedCharger: parameter})
  }



  render() {
    return (    
      
      <Router history={history}>

        <Route path="/" exact component={Login} />
        <Route path="/content" render={(props) => <Contentbox items={this.state.items} SetSelectedCharger={this.SetSelectedCharger} SelectedCharger={this.state.SelectedCharger}/> } />      
        
      </Router>
      
    )
  }
}

export default App;
