import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Photos = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15';

    const {result, loading, error} = useFetch(url);

    if(loading) return <section><p>Loading...</p></section>
    if(error) return <section><p>{error}</p></section>

    const photoList = result.map(photo => (
    <li key={photo.id}>
        <Link to={`/photo-details/${photo.id}`}><p>{photo.title}</p></Link>
    </li> ))


  return (
    <section>{photoList}</section>
  )
}

export default Photos