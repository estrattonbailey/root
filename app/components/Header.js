import React from 'react'

export default function Header ({ title, subtitle }) {
  return (
    <div className='header'>
      {subtitle && <p className='h5'>{subtitle}</p>}
      <h1 className='mt025'>{title}</h1>
    </div>
  )
}
