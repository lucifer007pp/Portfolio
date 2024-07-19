import React from 'react'
import { getImageUrl } from '../../utilis'
import style from "./Contact.module.css"

function Contact() {
  return (
    <footer id='contact' className={style.container}>
        <div className={style.text}>
            <a href="mailto:palparthib1@gmail.com" className={style.btn}>Contact</a>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={style.links}>
            <li className={style.link}>
                <img src={getImageUrl("contact/whats.png")} alt="Icon" className={style.whatsappicon}/>
                <p>+91 9932049112</p>
            </li>

            <li className={style.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Icon" />
                <a href="https://github.com/lucifer007pp" target='_blank'>gitHub/parthib-pal</a>
            </li>

            <li className={style.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Icon" />
                <a href="https://www.linkedin.com/in/parthib-pal-825b9a259/" target='_blank'>linkedin.com/parthib-pal</a>
            </li>

        </ul>
    </footer>
  )
}

export default Contact
