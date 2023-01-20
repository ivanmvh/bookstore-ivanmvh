import { Link } from 'react-router-dom';
import { FaUserGraduate } from 'react-icons/fa';

const Navbar = () => (
  <div className="navBar">
    <ul className="nav">
      <p className="logo">Bookstore imvh</p>
      <li className="navLink"><Link to="/">Books</Link></li>
      <li className="navLink"><Link to="/categories">Categories</Link></li>
      <div className="userBtn"><FaUserGraduate style={{ color: '#0290ff' }} /></div>
    </ul>
  </div>
);

export default Navbar;
