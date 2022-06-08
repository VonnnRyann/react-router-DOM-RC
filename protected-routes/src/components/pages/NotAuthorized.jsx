import { useNavigate } from 'react-router-dom';

const NotAuthorized = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h1>Please login to access this page</h1>
      <button className='login-button' onClick={() => navigate('/login')}>
        Login
      </button>
    </section>
  );
};

export default NotAuthorized;