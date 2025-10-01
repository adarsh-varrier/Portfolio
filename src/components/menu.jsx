import React from 'react'
import css from '../css/menu.module.css';

export default function Menu({ isDark }) {
  return (
    <div className={`${css.menu} ${isDark ? css.dark : css.light}`}>
        <div className={css.menuitem}>
            <div className={css.menuimg}>
                <img src="menu1.1.png" alt="menu-img" />
            </div>
            <div className={css.menuname}>
                <h2>Work Experiance</h2>
            </div>
        </div>
        <div className={css.menuitem}>
            <div className={css.menuimg}>
                <img src="menu1.1.png" alt="menu-img" />
            </div>
            <div className={css.menuname}>
                <h2>Projects</h2>
            </div>
        </div>
        <div className={css.menuitem}>
            <div className={css.menuimg}>
                <img src="menu1.2.png" alt="menu-img" />
            </div>
            <a href="/edu">
                <div className={css.menuname}>
                    <h2>Education</h2>
                </div>
            </a>
        </div>
        <div className={css.menuitem}>
            <div className={css.menuimg}>
                <img src="menu1.3.png" alt="menu-img" />
            </div>
            <div className={css.menuname}>
                <h2>Out of the box</h2>
            </div>
        </div>
        <div className={css.menuitem}>
            <div className={css.menuimg}>
                <img src="menu1.3.png" alt="menu-img" />
            </div>
            <div className={css.menuname}>
                <h2>certificates</h2>
            </div>
        </div>
      </div>
  )
}
