
import Homebar from './homebar';
import Home from './home';
import Footer from './footer';
import Menu from './menu';
import { useRef } from 'react';

export default function Landing({ isDark, toggleTheme }) {
  const menuRef = useRef(null);
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Homebar isDark={isDark} toggleTheme={toggleTheme} />
      <Home isDark={isDark} scrollToMenu={scrollToMenu} />
      <div ref={menuRef}>
        <Menu isDark={isDark} />
      </div>
      <Footer isDark={isDark}/>
    </div>
  );
}
