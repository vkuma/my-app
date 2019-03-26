import { BrowserRouter, Route, Switch } from 'react-router-dom'

import React, { Component, Fragment } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import Header from '../components/headerComponent/Header.js';
import Footer from '../components/footerComponent/footer.js';
import Main from '../components/Main.js';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>

    );
  }
}

export default App;
