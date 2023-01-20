import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navBar">
    <p className="logo">Bookstore-ivanmvh</p>
    <ul className="nav">
      <li className="navLink"><Link to="/">Books</Link></li>
      <li className="navLink"><Link to="/Categories">Calculator</Link></li>
    </ul>
  </div>
);

export default Navbar;
