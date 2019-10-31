import React, {useState} from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';

//TODO Web Template Studio: Add routes for your new pages here.
function App() {
  return (
    <Router>
        <div className="content">
          <Header projectName={'Project Name'} />
          <Route exact path="/" component={Home} />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </Router>
  );
}

export default App;
