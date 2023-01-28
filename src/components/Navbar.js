import { NavLink } from 'react-router-dom';
import { FaUserGraduate } from 'react-icons/fa';

const Navbar = () => (
  <div className="navBar">
    <p className="logo">Bookstore CMS</p>
    <ul className="nav">
      <li className="navLink"><NavLink to="/" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>BOOKS</NavLink></li>
      <li className="navLink"><NavLink to="/categories" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>CATEGORIES</NavLink></li>
    </ul>
    <div className="userBtn"><FaUserGraduate style={{ color: '#0290ff' }} /></div>
  </div>
);

export default Navbar;
