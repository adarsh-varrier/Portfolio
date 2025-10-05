import React from 'react'
import { FaWhatsapp, FaHome, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import css from '../css/contact.module.css';

export default function Contact({ isDark }) {
    const phoneNumber = "918137008256";
    const message = "Hi, Adarsh";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className={`${css.contact} ${isDark ? css.dark : css.light}`}>
        <a href="/" className={css.homeIcon}><FaHome size={24} /></a>
        <div className={css.main}>
            <div className={css.mainitem}>
                <div className={css.mainicon}>
                    <FaEnvelope size={18}/>
                </div>
                <a href="mailto:adarshpmanimandiram@gmail.com">
                    adarshpmanimandiram@gmail.com
                </a>
            </div>
            <div className={css.mainitem}>
                <div className={css.mainicon}>
                    <FaMapMarkerAlt size={18}/>
                </div>
                <h4>Kottayam</h4>
                <h3>Kerala, India</h3>
            </div>
            <div className={css.mainitem}>
                <div className={css.mainicon}>
                    <FaPhoneAlt size={18} />
                </div>
                <a href="tel:+918137008256">+91 8137008256</a>
            </div>
        </div>
        <div className={css.sub}>
            <button className={css.subitem} onClick={() => window.open(url, "_blank")}>
                <div className={css.subicon}>
                    <FaWhatsapp size={22} />
                </div>
                WhatsApp
            </button>
            <a href="https://www.linkedin.com/in/adarsh-varrier/" target="_blank" rel="noopener noreferrer" className={css.subitem}>
                <div className={css.subicon}>
                    <FaLinkedin size={32} />
                </div>
                Linkedin
            </a>
            <a href="https://github.com/adarsh-varrier" target="_blank" rel="noopener noreferrer" className={css.subitem}>
                <div className={css.subicon}>
                    <FaGithub size={32} />
                </div>
                Github
            </a>
        </div>
    </div>
  )
}