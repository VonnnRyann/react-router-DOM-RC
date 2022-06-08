import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyProvider from '../context/MyProvider';
import Header from '../components/Header';
import Login from '../components/pages/Login';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Auth from '../authorization/Auth';
import NotAuthorized from '../components/pages/NotAuthorized';
import Protected1 from '../components/pages/Protected1';
import Protected2 from '../components/pages/Protected2';
import NotFound404 from '../components/pages/NotFound404';
import Footer from '../components/Footer';

//Setup the routes
const Routings = () => {
  return (
    <main>
      <Router>
        <MyProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/login' element={<Login />} />

            {/* As with nested routes that have a parent. One way of protecting
        our routes at the route level is by wrapping them with a parent
        component. The parent component or the authorizing component
        has code that will control what authorizes the child routes. */}
            <Route element={<Auth />}>
              <Route path='/protected1' element={<Protected1 />} />
              <Route path='/protected2' element={<Protected2 />} />
              <Route path='/about' element={<About />} />
            </Route>
            <Route path='/not-authorized' element={<NotAuthorized />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
          <Footer />
        </MyProvider>
      </Router>
    </main>
  );
};

export default Routings;