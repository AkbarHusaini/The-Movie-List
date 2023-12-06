// App.js
import React from 'react';
import HomePage from './components/HomePage';  // Make sure to update the import
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<HomePage />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
