import React from 'react'

import Header from '../components/header/header.jsx';
import Home from '../components/home/home.jsx';
import About from '../components/about/about.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <br />
      <Home />
      <br />
      <About />
    </div>
  );
}

export default App;
