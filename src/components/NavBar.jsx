import React from 'react'

const NavBar = ({ name }) => (
  <nav className='level' role='navigation' aria-label='main navigation'>
    <div className='level-left'>
      <div className='navbar-brand'>
        <p className='navbar-item'>Terry Yuen</p>
      </div>
    </div>
    <div className='level-right'>
      <p className='level-item'>
        <a href='' className='has-text-dark'>About me</a>
      </p>
      <p className='level-item'>
        <a href='' className='has-text-dark'>Fun projects</a>
      </p>
    </div>
  </nav>
)

export default NavBar
