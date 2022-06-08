import {useContext} from 'react'
import MyContext from '../context/MyContext'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    const {auth} = useContext(MyContext);
  return (
    <nav>
        <ul>
            <NavLink to='/' style={({isActive}) => {
          return {
            color: isActive && 'red'
          }}}>
                <li>Home</li>
            </NavLink>
            <NavLink to='/about' style={({isActive}) => {
          return {
            color: isActive && 'red'
          }}}>
                <li>About</li>
            </NavLink>
            {auth && (
          <NavLink
            to='/products'
            style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}>
            <li>Products</li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};
export default Nav;