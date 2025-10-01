// Home.jsx
import React from 'react';
import css from '../css/home.module.css';

export default function Home({ isDark }) {
  return (
    <div className={`${css.home} ${isDark ? css.dark : css.light}`}>
        {/* Your content here */}
    </div>
  );
}
