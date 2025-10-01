// Homebar.jsx
import React, { useState } from 'react';
import css from '../css/Homebar.module.css';

export default function Homebar({ isDark, toggleTheme }) {
  
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (e) => {
    e.stopPropagation();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
      <nav className={`${css.navbar} ${isDark ? css.dark : css.light}`}>
        <div className={css.container}>
          <div className={css.baritem}>
            <div className={css.profileWrapper} onClick={openPopup}>
              <div className="profileInner">
                <img src="adarsh3.png" alt="prof-pic" className={css.profileImage} />
              </div>
            </div>
            <h3 className={css.name}>Adarsh Prasad</h3>
          </div>
          <div className={css.baritem}>
            <button onClick={toggleTheme} className={css.themeButton}>
              {isDark ? (
                <svg className={css.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                  <path strokeWidth="2" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              ) : (
                <svg className={css.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {showPopup && (
        <div 
          className={`${css.popupOverlay} ${isDark ? css.dark : css.light}`} 
          onClick={handleOverlayClick}
        >
          <div className={css.popupContent}>
            <button 
              className={css.closeButton} 
              onClick={closePopup}
              aria-label="Close"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className={css.popupImageWrapper}>
              <img 
                src="adarsh.png" 
                alt="Adarsh Prasad - Profile" 
                className={css.popupImage} 
              />
            </div>
            <h2 className={css.popupName}>Adarsh Prasad</h2>
          </div>
        </div>
      )}
    </>
  );
}

// ============================================