import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul id="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
  }
  
export default Navigation;
  