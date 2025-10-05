import React from 'react'
import Homebar from './homebar'
import Footer from './footer'
import Projects from './projects'

export default function Projectflex({ isDark, toggleTheme }) {
  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Projects isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  )
}
