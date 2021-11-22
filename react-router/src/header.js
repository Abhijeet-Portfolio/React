import './App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <Link className="link" to=''>
            <li>Home</li>
          </Link>
          <Link className="link" to='links'>
            <li>Links</li>
          </Link>
          <Link className="link" to='about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;