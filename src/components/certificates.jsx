import React from 'react'
import { FaHome } from 'react-icons/fa'
import css from '../css/certificates.module.css';

export default function Certificates({ isDark }) {
  return (
    <div className={`${css.certificates} ${isDark ? css.dark : css.light}`}>
      <a href="/#menu" className={css.homeIcon}><FaHome size={24} /></a>
      <div className={css.card}>
        <div className={css.imgContainer}>
          <img src="python.jpg" alt="certificate" />
        </div>
      </div>
      <div className={css.card}>
        <div className={css.imgContainer}>
          <img src="AWS1.jpg" alt="certificate" />
        </div>
      </div>
      <div className={css.card}>
        <div className={css.imgContainer}>
          <img src="freecode.png" alt="project" />
        </div>
      </div>
      <div className={css.card}>
        <div className={css.imgContainer}>
          <img src="iot1.jpg" alt="certificate" />
        </div>
      </div>
      <div className={css.card}>
        <div className={css.imgContainer}>
          <img src="AI.png" alt="certificate" />
        </div>
      </div>
      <div className={css.card}>
        <div className={css.imgContainer}>
          <img src="cyber.png" alt="project" />
        </div>
      </div>
    </div>
  )
}
