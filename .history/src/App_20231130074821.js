// App.js
import React from 'react';
import homePage from './components/homePage';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <homePage />
    </div>
  );
}

export default App;
