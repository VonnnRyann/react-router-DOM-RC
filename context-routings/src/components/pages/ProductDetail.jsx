import {useContext,useEffect} from 'react'
import MyContext from '../../context/MyContext'
import { useLocation, useNavigate } from 'react-router-dom'

const ProductDetail = () => {
    const {auth,} = useContext(MyContext);
    const navigate = useNavigate()

    useEffect(() => {
        !auth && navigate('/')
    }, [auth, navigate])

    const location = useLocation();



  return (
  <section className='details'>
      <p>{location?.state?.title}</p>
      <img src={location?.state?.thumbnailUrl} alt={location?.state?.title} />
      <button className='form-button' onClick={() => navigate(-1)}>Return</button>
  </section>)
}

export default ProductDetail