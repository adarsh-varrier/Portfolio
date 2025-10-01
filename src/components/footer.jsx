import React from 'react';
import css from '../css/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer({ isDark }) {
  return (
    <footer className={`${css.footer} ${isDark ? css.dark : css.light}`}>
      <div className={css.section}>
        <h3>Let's Connect</h3>
        <ul>
          <li>
            <a href="mailto:adarshpmanimandiram@gmail.com">
              adarshpmanimandiram@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+918137008256">+91 8137008256</a>
          </li>
        </ul>
      </div>
      
      <div className={css.section}>
        <h3>Explore</h3>
        <ul>
          <li><a href="/">Resume</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">contact</a></li>
          <li><a href="/">who am i?</a></li>
          <li><a href="/">Experience</a></li>
        </ul>
      </div>
      
      <div className={css.section}>
        <h3>Social links</h3>
        <ul className={css.socials}>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}