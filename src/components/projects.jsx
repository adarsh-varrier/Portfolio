import React from 'react'
import { FaGithub, FaHome } from 'react-icons/fa'
import css from '../css/project.module.css'; 

export default function Projects({ isDark }) {
  return (
    <div className={`${css.project} ${isDark ? css.dark : css.light}`}>
        <a href="/#menu" className={css.homeIcon}><FaHome size={24} /></a>
        <div className={css.card}>
            <div className={css.imgContainer}>
                <img src="home3.png" alt="project" />
            </div>
            <div className={css.content}>
                <h3>Emotion Based Music Recommendation System</h3>
                <h6>Designed and implemented a music recommendation system driven by emotion detection from facial
                expressions and text input.</h6>
                <h6>Achieved 65% accuracy in emotion detection using CNN models</h6>
                <h6>Tools used: Django, HTML, CSS, TensorFlow, Hugging Face</h6>
                <a href="https://github.com/adarsh-varrier/FaceBeat" target="_blank" rel="noopener noreferrer" className={css.githubLink}>
                    <FaGithub size={28} />
                </a>
            </div>
        </div>
        <div className={css.card}>
            <div className={css.imgContainer}>
                <img src="smartplay.png" alt="project" />
            </div>
            <div className={css.content}>
                <h3>Weather and Health-Aware Playground System</h3>
                <h6>Integrates Google Fit API and Random Forest ML algorithm to offer personalised health status predictions.</h6>
                <h6>Use OpenWeatherMap and OpenUV APIs for real-time weather and UV index-based activity recommendations.</h6>
                <h6>Tools used: Django, React.js, PostgreSQL, Scikit-learn</h6>
                <a href="https://github.com/adarsh-varrier/smartplayground" target="_blank" rel="noopener noreferrer" className={css.githubLink}>
                    <FaGithub size={28} />
                </a>
            </div>
        </div>
    </div>
  )
}