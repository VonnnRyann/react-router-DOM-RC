import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from './MyContext';

//All our logic and functionality should be coded here.....
const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    user: '',
    password: '',
    authorized: false,
  });

  const [error, setError] = useState('');

  const inputRef = useRef();

  const navigate = useNavigate();

  const USER = process.env.REACT_APP_NAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  const success = () => {
    setData({ ...data, authorized: true });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (USER === data.user && PASSWORD === data.password) {
      success();
    } else {
      setData({ user: '', password: '', authorized: false });
      setError('The credentials entered are not valid. Please try again.');
      inputRef.current.focus();
    }
  };

  const handleLogout = () => {
    setData({ user: '', password: '', authorized: false });
    navigate('/');
  };

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        error,
        setError,
        inputRef,
        handleLogin,
        handleLogout,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;