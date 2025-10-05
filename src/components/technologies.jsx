import React from 'react'
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaGitlab } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiSqlite, SiDjango, SiReact, SiTensorflow, SiScikitlearn, SiSpringboot, SiPostman, SiJira, SiRedmine, SiMongodb } from "react-icons/si";
import css from '../css/tech.module.css';

export default function Technologies({ isDark }) {
    const getIconColor = (lightColor, darkColor) => {
        return isDark ? darkColor : lightColor;
    };
  return (
    <div className={`${css.tech} ${isDark ? css.dark : css.light}`}>
        <div className={css.head}>
            <h3>Technologies</h3>
        </div>
        <div className={css.body}>
        {/* First section: Languages */}
            <div className={css.section}>
                <div className={css.icon}><FaPython size={40} color="#3776AB" /><p>Python</p></div>
                <div className={css.icon}><FaJava size={40} color="#f89820" /><p>Java</p></div>
                <div className={css.icon}><FaHtml5 size={40} color="#E34F26" /><p>HTML</p></div>
                <div className={css.icon}><FaCss3Alt size={40} color="#1572B6" /><p>CSS</p></div>
                <div className={css.icon}><FaJs size={40} color="#F7DF1E" /><p>JavaScript</p></div>
            </div>

        {/* Second section: Frameworks & Libraries */}
            <div className={css.section}>
                <div className={css.icon}>
                  <SiDjango size={40} color={getIconColor("#092E20", "#0FA051")} />
                  <p>Django REST</p>
                </div>
                <div className={css.icon}><SiReact size={40} color="#61DAFB" /><p>React.js</p></div>
                <div className={css.icon}><SiTensorflow size={40} color="#FF6F00" /><p>TensorFlow</p></div>
                <div className={css.icon}><SiScikitlearn size={40} color="#F7931E" /><p>Scikit-learn</p></div>
                <div className={css.icon}><SiSpringboot size={40} color="#6DB33F" /><p>Spring Boot</p></div>
            </div>

        {/* Third section: Tools */}
            <div className={css.section}>
                <div className={css.icon}><FaGitAlt size={40} color="#F05032" /><p>Git</p></div>
                <div className={css.icon}>
                  <FaGithub size={40} color={getIconColor("#181717", "#FFFFFF")} />
                  <p>GitHub</p>
                </div>
                <div className={css.icon}><FaGitlab size={40} color="#FC6D26" /><p>GitLab</p></div>
                <div className={css.icon}><SiPostman size={40} color="#FF6C37" /><p>Postman</p></div>
                <div className={css.icon}><SiJira size={40} color="#0052CC" /><p>Jira</p></div>
                <div className={css.icon}><SiRedmine size={40} color="#B32024" /><p>Redmine</p></div>
            </div>

        {/* Fourth section: Databases */}
            <div className={css.section}>
                <div className={css.icon}><SiMysql size={40} color="#4479A1" /><p>Workbench</p></div>
                <div className={css.icon}>
                  <SiSqlite size={40} color={getIconColor("#003B57", "#0FA0D9")} />
                  <p>SQLite</p>
                </div>
                <div className={css.icon}><SiPostgresql size={40} color="#336791" /><p>PGAdmin</p></div>
                <div className={css.icon}>
                    <SiMongodb size={40} color="#47A248" />
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
    </div>
  )
}
