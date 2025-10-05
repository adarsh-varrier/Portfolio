import React from 'react'
import Homebar from './homebar'
import Certificates from './certificates'
import Footer from './footer'

export default function Certiflex({ isDark, toggleTheme }) {
  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Certificates isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  )
}
