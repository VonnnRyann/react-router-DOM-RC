import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({
      name: '',
      password: '',
      authorized: false
    })

    const NAME = process.env.REACT_APP_NAME
    const PASSWORD = process.env.REACT_APP_PASSWORD

    const navigate = useNavigate();

    const success = () => {
      setData({
        ...data, 
        authorized: true
      })
      navigate('logged-in', {state: {name: data.name, authorized:true}})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      NAME === data.name && PASSWORD === data.password ? success() : navigate('/alien')
    }

  return (
    <div>
      <h2>Please Login</h2>
      <form>
        <input 
        type="text" 
        placeholder='Please enter your name'
        value={data.name}
        onChange={(e) => setData({
          ...data,
          name: e.target.value
        })}
        />
        <br />
        <br />
        <input 
        type="password" 
        placeholder='Please enter your password'
        value={data.password}
        onChange={(e) => setData({
          ...data,
          password: e.target.value
        })}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login