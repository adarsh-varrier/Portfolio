
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import './css/common.css'
import Landing from './components/landing';
import Eduflex from "./components/eduflex";
import { useEffect, useState } from "react";

function App() {
  // Initialize from localStorage, default to true if not found
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Save to localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/edu" element = {<Eduflex isDark={isDark} toggleTheme={toggleTheme} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
