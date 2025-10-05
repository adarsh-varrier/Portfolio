// Home.jsx
import React, { useState } from 'react';
import css from '../css/home.module.css';
import { useNavigate } from "react-router-dom";

export default function Home({ isDark, scrollToMenu }) {
  const navigate = useNavigate();
  const [showAbout,setShowAbout] = useState(false);
  return (
    <div className={`${css.home} ${isDark ? css.dark : css.light}`}>
      <div className={css.homemain}>
        <h1>Hi, I am Adarsh.</h1>
        <div style={{ position: 'relative', minHeight: '2.5rem', marginTop: '1rem' }}>
          <h3>Web Developer</h3>
          <h3>Full Stack Developer</h3>
          <h5>from Kerala</h5>
        </div>
        
      </div>
      <div className={css.homesub}>
        <button onClick={()=>setShowAbout(true)}>About me</button>
        <button onClick={() => navigate("/contact")}>Let's Connect</button>
        <button onClick={scrollToMenu}>My Journey</button>
      </div>
      {/* About Me Popup */}
      {showAbout && (
        <div className={css.popupOverlay} onClick={() => setShowAbout(false)}>
          <div className={css.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={css.closeBtn} onClick={() => setShowAbout(false)}>×</button>
            <h2 className={css.popupTitle}>About Me</h2>
            <div className={css.board}>
              <p className={css.paragraph}>I'm Adarsh P from Kottayam, Kerala. I hold a Master of Computer Applications (MCA) from Cochin University of Science and Technology, after completing my BCA from Mahatma Gandhi University.</p>
              <p className={css.paragraph}>I have a strong interest in full-stack development and machine learning, with hands-on experience in technologies such as Python, Django, React.js, and PostgreSQL.</p>
              <p className={css.paragraph}>Currently, I am pursuing two internships: one with the Mahatma Gandhi University Innovation Foundation as a Python Developer, and another with Qverse Technologies as a Remote Backend Developer. Through these roles, I have gained practical experience with tools like AWS EC2, Jira, GitLab, and GitHub, enhancing my ability to work effectively in collaborative environments.</p>
              <p className={css.paragraph}>During my academics, I worked on several major projects. One of them was a Weather & Health-Aware Playground System, which integrated real-time APIs with machine learning to provide health-based recommendations. Another was an Emotion-Based Music Recommendation System, built using TensorFlow and Hugging Face, which detected emotions from facial expressions and text input to generate personalized music suggestions.</p>
              <p className={css.paragraph}>Beyond technical expertise, I value teamwork, adaptability, and continuous learning—qualities I consider essential in a professional setting. I have actively participated in hackathons, mentored at tech events, and volunteered with NSS, experiences that have shaped me into both a team player and a leader.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
