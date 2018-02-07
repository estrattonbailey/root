import React from 'react'
import Nav from 'components/Nav.js'
import Outer from 'components/Outer.js'
import Footer from 'components/Footer.js'

export default function App ({ children }) {
  return (
    <main>
      <Nav />
      <Outer>
        {children}
        <Footer />
      </Outer>
    </main>
  )
}
