import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <div className="container">
        <div className='logo'>
            <p>SAHARA</p>
        </div>
        <div className='sub-container'>
            <div className='user'>Usuario</div>
            <button>USUARIO</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
