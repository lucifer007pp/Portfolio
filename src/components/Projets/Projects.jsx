import React from 'react'
import projects from "../../data/projects.json"
import style from "./Projects.module.css"
import { getImageUrl } from '../../utilis'

function Projects() {
  return (
    <section className={style.container} id='projetcs'>
        <h2 className={style.title}>Projects</h2>
        <div className={style.projects}>
            {
                projects.map((project, id) =>{
                    return (
                        <div className={style.containerCard} key={id}>
                            <img className={style.image} src={getImageUrl(project.imagesrc)} alt="projectImg" />
                            <h3 className={style.projectTitle}>{project.title}</h3>
                            <p className={style.description}>{project.description}</p>
                            <ul className={style.skills}>{
                                project.skills.map((skill, id) => (
                                    <li key={id} className={style.Skill}>{skill}</li>
                                ))
                            }</ul>
                            <div className={style.links}>
                                <a className={style.link} target='_blank' href={project.demo}>Demo</a>
                                <a className={style.link} target='_blank' href={project.source}>Source</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Projects
