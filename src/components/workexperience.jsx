// workexperience.jsx
import React from 'react'
import { FaRegCalendarAlt, FaHome } from "react-icons/fa";
import css from '../css/work.module.css';

export default function Workexperience({ isDark }) {
  return (
    <div className={`${css.work} ${isDark ? css.dark : css.light}`}>
        <a href="/#menu" className={css.homeIcon}><FaHome size={24} /></a>
        <div className={css.card}>
            <div className={css.content}>
                <h3>MGU INNOVATION FOUNDATION</h3>
                <h4>Python Developer Intern</h4>
                <div className={css.gradeContainer}>
                    <p><FaRegCalendarAlt size={24} />Sep 2025 - Present</p>
                </div>
            </div>
        </div>
        <div className={css.card}>
            <div className={css.content}>
                <h3>QVERSE TECHNOLOGIES</h3>
                <h4>Backend Developer (remote)</h4>
                <div className={css.gradeContainer}>
                    <p><FaRegCalendarAlt size={24} />Jul 2025 - Sep 2025</p>
                </div>
            </div>
        </div>
    </div>
  )
}