import Navigation from './components/Navigation/Navigation'
import { Routes, Route, HashRouter, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import { useState } from 'react';

const App = () => {
    return (
        <div className="app">
            <HashRouter>
                <Navigation />
                <Routes>
                    <Route exact path="/" element={<Home />} onChange/>
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
