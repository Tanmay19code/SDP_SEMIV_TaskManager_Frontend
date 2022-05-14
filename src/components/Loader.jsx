import React from 'react'
import loader from '../assets/gif/loadingGif.gif'
import '../styles/loader.css'

const Loader = () => {
  return (
    <div className="loaderContainer">
        <img src={loader} alt="loaderComponent" />
    </div>
  )
}

export default Loader