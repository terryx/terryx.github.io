import React from 'react'

const Card = ({ name, link, description = '' }) => (
  <div className='column is-one-third is-flex'>
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title'>
          <a href={link} target='_blank'>{name}</a>
        </p>
      </header>
      <div className='card-content'>
        <div className='content'>
          {description}
        </div>
      </div>
    </div>
  </div>
)

export default Card
