import React from 'react'
import { FaGraduationCap, FaHome } from "react-icons/fa";
import Homebar from './homebar';
import Footer from './footer';
import css from '../css/education.module.css';

export default function Education({ isDark }) {
  return (
        <div className={`${css.edu} ${isDark ? css.dark : css.light}`}>
            <a href="/" className={css.homeIcon}><FaHome size={24} /></a>
            <div className={css.card}>
                <div className={css.imgContainer}>
                    <img src="mca1.jpg" alt="mca" />
                </div>
                <div className={css.content}>
                    <h3>Master of Computer Applications</h3>
                    <h4>Cochin University of Science and Technology</h4>
                    <div className={css.gradeContainer}>
                        <p><FaGraduationCap size={24} />8.8 CGPA</p>
                    </div>
                </div>
            </div>
            <div className={css.card}>
                <div className={css.imgContainer}>
                    <img src="bca1.jpg" alt="bca" />
                </div>
                <div className={css.content}>
                    <h3>Bachelor of Computer Applications</h3>
                    <h4>Mahatma Gandhi University, Kerala</h4>
                    <div className={css.gradeContainer}>
                        <p><FaGraduationCap size={24} />7.6 CGPA</p>
                    </div>
                </div>
            </div>
            <div className={css.card}>
                <div className={css.imgContainer}>
                    <img src="secondary.png" alt="higher secondary" />
                </div>
                <div className={css.content}>
                    <h3>Higher Secondary - Computer Science</h3>
                    <h4>Directorate of Higher Secondary Education, Kerala</h4>
                    <div className={css.gradeContainer}>
                        <p><FaGraduationCap size={24} />80.25%</p>
                    </div>
                </div>
            </div>
        </div>
  )
}