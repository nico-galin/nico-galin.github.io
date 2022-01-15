import Navigation from './components/Navigation/Navigation'
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import ItemSpotlight from './pages/ItemSpotlight/ItemSpotlight';

const App = () => {
    return (
        <div className="app">
            <HashRouter>
                <Navigation />
                <div className="appContent">
                    <Routes>
                        <Route exact path="/" element={<Home />} onChange/>
                        <Route path="/portfolio/*" element={<Portfolio />} />
                        <Route path="/itemspotlight" element={<ItemSpotlight />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
