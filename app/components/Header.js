import React from 'react'

export default function Header ({ title, subtitle }) {
  return (
    <div className='header'>
      <h1>{title}</h1>
      {subtitle && <p className='h4'>{subtitle}</p>}
      <hr />
    </div>
  )
}
