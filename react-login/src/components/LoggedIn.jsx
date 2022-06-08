import {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LoggedIn = () => {
    const location = useLocation()
    const navigate =useNavigate()


    useEffect(() => {
        !location.state?.name && navigate('/')
    }, [location,navigate]);
  

  return (
    <div>
      <h2>You have successfully Logged in {location.state?.name}</h2>
    </div>
  )
}
export default LoggedIn