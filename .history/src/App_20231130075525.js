// App.js
import React from 'react';
import homePage from './components/home_page';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<homePage/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
