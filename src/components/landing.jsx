
import Homebar from './homebar';
import Home from './home';
import Footer from './footer';
import Menu from './menu';
import { useEffect, useRef } from 'react';

export default function Landing({ isDark, toggleTheme }) {
  const menuRef = useRef(null);
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Scroll to menu if hash is present
  useEffect(() => {
    if (location.hash === '#menu') {
      setTimeout(() => {
        menuRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Home isDark={isDark} scrollToMenu={scrollToMenu} />
      <div ref={menuRef}>
        <Menu isDark={isDark} />
      </div>
      {/* <Technologies isDark={isDark}/> */}
      <Footer isDark={isDark}/>
    </div>
  );
}
