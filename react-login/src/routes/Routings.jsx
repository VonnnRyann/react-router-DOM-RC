import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Login from '../components/Login'
import Alien from '../components/Alien'
import LoggedIn from '../components/LoggedIn'


const Routings = () => (
  
    
  <Router>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/alien' element={<Alien/>}/>
          <Route path='/logged-in' element={<LoggedIn/>}/>
      </Routes>
  </Router>
)

export default Routings