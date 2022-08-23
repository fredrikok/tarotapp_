import React from 'react';
import './App.scss';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//components
import Navbar from './components/Navbar';
//Pages
import Home from './pages/Home'
import Cardlist from './pages/Cardlist'
import Onespread from './pages/Onespread';
import Threespread from './pages/Threespread';
import Horoscope from './pages/Horoscope';

function App() {
  return (
    <>

    <Router>    
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cardlist" element={<Cardlist />} />
        <Route path="/onespread" element={<Onespread />} />
        <Route path="/threespread" element={<Threespread />} />
        <Route path="/horoscope" element={<Horoscope />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App

