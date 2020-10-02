import React, { Component } from 'react';
import axios from 'axios';
import Contentbox from "./components/contentbox.js"
import Login from './components/login.js'
import Charger from './components/charger.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/data')
    
      .then((response) => {
        this.setState({ items: response.data })
      });
  }



  render() {
    return (    
      
      <Router>

        <Route path="/" exact component={Login} />
        <Route path="/content" render={(props) => <Contentbox items={this.state.items} /> } />      
        
      </Router>
      
    )
  }
}

export default App;
