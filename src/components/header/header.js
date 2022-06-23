import './header.css';
import { Link } from 'react-router-dom';
import { CardHeader } from '../CardHeader'
export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <nav className="nav">
        <Link to="/" className="navbar__links">
          Home
        </Link>
        <Link to="/" className="navbar__links">
          Second
        </Link>
        </nav>

        <CardHeader></CardHeader>
      </div>

    </div>
  );
};
