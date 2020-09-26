import React, { Component } from 'react';
import axios from 'axios';
import Contentbox from "./components/contentbox.js"
import { BrowserRouter as Router, Route, Link } from "react-router";
import './App.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }



  render() {
    return (
      <div className="mainbox">
        <Contentbox />
      </div>
    )
  }
}

export default App;
