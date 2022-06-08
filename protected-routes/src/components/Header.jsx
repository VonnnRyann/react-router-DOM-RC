import { useContext } from 'react';

import MyContext from '../context/MyContext';
import Nav from './Nav';

const Header = () => {
  const { data, handleLogout } = useContext(MyContext);

  

  return (
    <header>
      <Nav />

      {data.authorized && (
        <button className='header-button' onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;