
import { useState } from 'react'
import Homebar from './homebar';
import Home from './home';
import Footer from './footer';
import Menu from './menu';

export default function Landing() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Home isDark={isDark} />
      <Menu isDark={isDark} />
      <Footer isDark={isDark}/>
    </div>
  );
}
