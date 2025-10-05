import React from 'react';
import css from '../css/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab, faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

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
          <li><a href="/contact">Contact</a></li>
          <li><a href="/AdarshP_.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="/project">Projects</a></li>
          <li><a href="/work">Experience</a></li>
        </ul>
      </div>
      
      <div className={css.section}>
        <h3>Social links</h3>
        <ul className={css.socials}>
          <li>
            <a href="https://www.linkedin.com/in/adarsh-varrier/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://github.com/adarsh-varrier" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/adarshwarrier" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGitlab} size="2x" />
            </a>
          </li>
          <li>
            <a href="https://t.me/adarsh_varrier?start=Hi_Adarsh" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}