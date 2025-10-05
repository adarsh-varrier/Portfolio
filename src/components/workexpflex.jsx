import React from 'react'
import Homebar from './homebar'
import Footer from './footer'
import Workexperience from './workexperience'

export default function Workexpflex({ isDark, toggleTheme }) {
  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Workexperience isDark={isDark} />
      <Footer isDark={isDark}/>
    </div>
  )
}
