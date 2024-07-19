import React from 'react'
import { getImageUrl } from '../../utilis'
import style from './About.module.css'

function About() {
  return (
    <section className={style.container} id='about'>

      <h2 className={style.title}>About</h2>

      <div className={style.content}>
        <img src={getImageUrl("about/aboutimage.png")} alt="aboutImg" className={style.aboutImg}/>
        
        <ul className={style.aboutItems}>

          <li className={style.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Icons" />
            <div className={style.aboutItemText}>
              <h3>Fronted Developer</h3>
              <p>
                I'm a fronted developer with experience 
                in bulid and optimized sites 
              </p>
            </div>
            </li>

            <li className={style.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Icons" />
            <div className={style.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm developing fast and optimized backend and 
                also APIs
              </p>
            </div>
            </li>

            <li className={style.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Icons" />
            <div className={style.aboutItemText}>
              <h3>C/C++ Developer</h3>
              <p>
                I have built couple of projects 
                like online banking and registration system 
                and sloved over 200+ leetcode questions 
              </p>
            </div>
            </li>

          </ul>
      </div>
    </section>
  )
}

export default About
