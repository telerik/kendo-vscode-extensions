import React, {useState} from 'react';
import './App.scss';
import { Header } from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <div className="content">
          <Header projectName={'wts.KendoReactDefault'} />
          <Route exact path="/" component={Home} />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </Router>
  );
}

export default App;
