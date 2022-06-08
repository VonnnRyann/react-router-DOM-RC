import {useContext,useEffect} from 'react'
import MyContext from '../../context/MyContext'
import { Link, useNavigate } from 'react-router-dom'

const Products = () => {
    const {auth, result, loading, error} = useContext(MyContext);
    const navigate = useNavigate()

    useEffect(() => {
        !auth && navigate('/')
    }, [auth, navigate])

    if(loading) return <section><p>Loading...</p></section>
    if(error) return <section><p>{error}</p></section>

    const list = result.map(item => <li key={item.id}><Link to='/product-details' state={item}><p>{item.title}</p></Link></li> )

  return <section>{list}</section>
}

export default Products