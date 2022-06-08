import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink
          to='/about'>
          <li>About</li>
        </NavLink>
        <NavLink
          to='/protected1'>
          <li>Protected Route 1</li>
        </NavLink>
        <NavLink
          to='/protected2'>
          <li>Protected Route 2</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;