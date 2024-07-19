import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utilis'
import style from "./Experience.module.css"

function Experience() {
  return (
    <section className={style.container} id='experience'>
        <h2 className={style.title}>Experience</h2>
        <div className={style.content}>
            <div className={style.skills}>{
                skills.map((skill, id) =>{
                    return (<div key={id} className={style.skill}>
                        <div className={style.skillImgContainer}><img src={getImageUrl(skill.imagesrc)} alt={skill.title} /></div>
                    <p>{skill.title}</p>
                    </div>
                    );
                })
            }</div>

            <ul className={style.history}>
                {
                    history.map((historyItem, id) => {
                        return <li key={id} className={style.historyItem}>
                            <img className={style.historyImg} src={getImageUrl(historyItem.imagesrc)} alt="Exp Icon" />
                            <div className={style.historyItemDetailes}>
                                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate}`}</p>
                                <p>{`${historyItem.description}`}</p>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Experience
