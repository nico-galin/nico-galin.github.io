import Navigation from './components/Navigation/Navigation'
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

const App = () => {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
