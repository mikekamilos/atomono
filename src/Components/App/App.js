import React, { Component } from 'react';
import "./App.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

export class App extends Component {
  render() {
    return (
      <div className="component">
        <Header className="header"/>

        <Main />

        <Footer />
      </div>
    )
  }
}

export default App
