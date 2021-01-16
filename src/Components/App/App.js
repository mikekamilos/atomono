import React, { Component } from 'react';
import "./App.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Main />

        <Footer />

        <div className="copyright">&copy; Atomono {currentYear}</div>
      </div>
    )
  }
}

let currentYear = new Date().getFullYear();

export default App
