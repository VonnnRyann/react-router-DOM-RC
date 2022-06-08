import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../context/MyContext';

//For this to work we cannot use the navigate hook as normal.
//The boys who created react-router-dom have very kindly given us
//useNavigate in a component form.

// Here we are checking if the user has logged in successfully.
// If so then access the appropriate child route and render it through the
// Outlet. If not then stay at the login route.

const Auth = () => {
  const { data } = useContext(MyContext);

  return data.authorized ? <Outlet /> : <Navigate to='/not-authorized' />;
};

export default Auth;