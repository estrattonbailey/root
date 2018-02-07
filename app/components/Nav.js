import React from 'react'
import Link from 'components/Link.js'

export default function Nav (props) {
  return (
    <nav className='nav mxa f aic jcb'>
      <h1 className='h5 b'>
        <Link href='/' className='nav__logo rel'>estrattonbailey<span /></Link>
      </h1>

      <ul className='block x f aic jce fa h6 b i caps track'>
        <li><Link href='/notes' className='rel'>notes<span /></Link></li>
      </ul>
    </nav>
  )
}

