// App.js
import React from 'react';
import HomePage from './components/home_page';// Make sure to update the import
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
