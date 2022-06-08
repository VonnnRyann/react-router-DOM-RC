import React from 'react'
import { useNavigate } from 'react-router-dom'

const Alien = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h2>Dont try to fuck my code</h2>
      <button onClick={() => navigate('/')}>Return</button>
    </div>
  )
}

export default Alien