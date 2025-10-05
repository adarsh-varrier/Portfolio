import React from 'react'
import Oob from './oob'
import Homebar from './homebar'
import Footer from './footer'

export default function Oobflex({ isDark, toggleTheme }) {
  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Oob isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  )
}
