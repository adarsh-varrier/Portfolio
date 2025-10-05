
import css from '../css/oob.module.css'; 
import { FaHome } from 'react-icons/fa';

export default function Oob({ isDark }) {
  return (
    <div className={`${css.Oob} ${isDark ? css.dark : css.light}`}>
        <a href="/#menu" className={css.homeIcon}><FaHome size={24} /></a>
        <div className={css.card}>
            <div className={css.imgContainer}>
                <img src="mentoring.png" alt="oob" />
            </div>
            <div className={css.content}>
                <h4>Tinker-Hack 3.0</h4>
                <h5>Mentor</h5>
            </div>
        </div>
        <div className={css.card}>
            <div className={css.imgContainer}>
                <img src="organizer.jpg" alt="oob" />
            </div>
            <div className={css.content}>
                <h4>Algortham Tech Fest (CUCEK)</h4>
                <h5>Mentor and Organizer</h5>
            </div>
        </div>
        <div className={css.card}>
            <div className={css.imgContainer}>
                <img src="default.png" alt="project" />
            </div>
            <div className={css.content}>
                <h4>National Service Scheme</h4>
                <h5>Volunteer</h5>
            </div>
        </div>
    </div>
  )
}
