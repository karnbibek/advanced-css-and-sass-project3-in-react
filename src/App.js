import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

const App = ({ children }) => {
  return (
    <div className="container">
      <div className="header">
      <Navbar />
      </div>
      <div className="contents">
      {children}
      </div>
    </div>
  )
};

export default App;