import React from 'react'
import { useState } from 'react'
import style from './Navbar.module.css'
import {getImageUrl} from '../../utilis'

function Navbar() {

  const [memuOpen, setmemuOpen] = useState(false)

  return <nav className={style.navbar}>
    <a className={style.title} href="/">Portfolio</a>
    <div className={style.memu}>
        <img 
        className={style.memuBtn} 
        src={memuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} 
        alt="memu button" 
        onClick={()=> setmemuOpen(!memuOpen)}
        />
        <ul className={`${style.memuItems} ${memuOpen && style.memuOpen}`}
        onClick={()=> setmemuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experiences</a></li>
            <li><a href="#projetcs">Projetcs</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  </nav>
}

export default Navbar
