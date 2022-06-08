import { useContext } from 'react';
import MyContext from '../context/MyContext';

const LoginForm = () => {
  const { form, handleFormInput, handleSubmit, auth } = useContext(MyContext);
  const { name, password } = form;

  const logged = !auth ? (
    <form>
      <input
        type='text'
        placeholder='Please enter your name'
        name='name'
        value={name}
        onChange={handleFormInput}
      />
      <input
        type='password'
        placeholder='Please enter your password'
        name='password'
        value={password}
        onChange={handleFormInput}
      />
      <button className='form-button' onClick={handleSubmit}>
        Login
      </button>
    </form>
  ) : (
    <button className='form-button' onClick={handleSubmit}>
      Logout
    </button>
  );
  return logged;
};
export default LoginForm;