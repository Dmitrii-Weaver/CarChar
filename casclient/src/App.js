import React, { Component } from 'react';
import axios from 'axios';
import Contentbox from "./components/contentbox.js"
import Login from './components/login.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoggedIn: false,
      SelectedCharger: null,
      chargingIsOn: false,
      searchResult: []

    }
  }
  componentDidMount() {

    axios.get('http://54.82.112.239/data2')

      .then((response) => {
        this.setState({ items: response.data })
        this.setState({ searchResult: response.data })
      });
  }
  SetIsLoggedIn = () => {
    this.setState({ isLoggedIn: true })
    console.log(this.state.isLoggedIn)
  }

  SetSelectedCharger = (parameter) => {
    this.setState({ SelectedCharger: parameter })
  }

  SetChargingIsOn = (parameter) => {
    this.setState({ chargingIsOn: parameter })
  }

  SetSearchResult = (parameter) => {
    this.setState({ searchResult: parameter })
  }



  render() {
    return (

      <Router>

        <Route path="/" exact render={(routeProps) =>
          <Login SetIsLoggedIn={this.SetIsLoggedIn}  {...routeProps}
          />}
        />
        <Route isLoggedIn={this.state.isLoggedIn} path="/content" exact
          render={(routeProps) =>
            <Contentbox
              items={this.state.items}
              chargingIsOn={this.state.chargingIsOn}
              SetChargingIsOn={this.SetChargingIsOn}
              SetSelectedCharger={this.SetSelectedCharger}
              SelectedCharger={this.state.SelectedCharger}
              SetSearchResult={this.SetSearchResult}
              searchResult={this.state.searchResult}
              isLoggedIn={this.state.isLoggedIn}
              

            />}
        />

      </Router>

    )
  }
}

export default App;
