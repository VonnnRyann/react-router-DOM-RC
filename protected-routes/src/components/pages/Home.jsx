import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MyContext from '../../context/MyContext';

const Login = () => {
  const context = useContext(MyContext);
  const { data, setData, error, setError, inputRef, handleLogin } = context;

  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  //Only if all okay navigate to the home page
  useEffect(() => {
    data.authorized && navigate('/');
  }, [data.authorized, navigate]);

  useEffect(() => {
    setError('');
  }, [setError]);

  return (
    <section>
      <form>
        <input
          type='text'
          ref={inputRef}
          value={data.user}
          placeholder='Please enter your username'
          onChange={(e) => setData({ ...data, user: e.target.value })}
        />
        <input
          type='password'
          value={data.password}
          placeholder='Please enter your password'
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className='login-button' onClick={(e) => handleLogin(e)}>
          Login
        </button>
        {error && <h4>{error}</h4>}
      </form>
    </section>
  );
};

export default Login;