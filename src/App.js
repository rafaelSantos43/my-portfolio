import React from 'react';
import './App.css';
import Experience from './components/experience/experience';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Section from './components/section/section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Section />
      <Experience/>
    </div>
  );
}

export default App;
