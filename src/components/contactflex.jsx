import React from 'react'
import Homebar from './homebar'
import Footer from './footer'
import Contact from './contact'

export default function Contactflex({ isDark, toggleTheme }) {
  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Contact isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  )
}
