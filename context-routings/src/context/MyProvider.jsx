import {useState} from 'react'
import MyContext from './MyContext'
import useFetch from '../hooks/useFetch'

const MyProvider = ({children}) => {
    const [form, setForm] = useState({
        name: '',
        password: ''
    })
    const [auth,setAuth] = useState(false)

    const NAME = process.env.REACT_APP_NAME
    const PASSWORD = process.env.REACT_APP_PASSWORD

    const handleFormInput = (e) => {
        setForm({...form, [e.target.name]:e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        form.name === NAME && form.password === PASSWORD 
        ?setAuth(true)
        :setAuth(false)
        setForm({
            name: '',
            password: ''
        }) 
    }

    const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15';

    const {result, loading, error} = useFetch(url)

  return (
    <MyContext.Provider 
        value={{
            result,
            loading,
            error,
            form,
            handleFormInput,
            handleSubmit,
            auth
        }}
    >
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider