import React, { useState } from 'react'
import Homebar from './homebar';
import Footer from './footer';
import Education from './education';

export default function Eduflex() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Education isDark={isDark}/>
      <Footer isDark={isDark}/>
    </div>
  );
}
