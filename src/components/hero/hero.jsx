import React from 'react'
import { getImageUrl } from '../../utilis';
import style from "./hero.module.css"

function hero() {

    const handleDownload = () => {
      // Path to your PDF file in the public folder
      const pdfPath = '/resume.pdf';
      
      // Create an anchor element
      const link = document.createElement('a');
      link.href = pdfPath;
      link.target = '_blank'
  
      // Append the anchor to the body
      document.body.appendChild(link);
  
      // Programmatically click the link to trigger the download
      link.click();
  
      // Remove the anchor from the body
      document.body.removeChild(link);
     }
  

  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.title}>Hi, I'm PARTHIB</h1>
            <p className={style.description}>
              I'm a full-stack developer. 
              I'm using React and express Js. 
              I'm also use the MongoDB for database.
            </p>
            <button onClick={handleDownload} className={style.cv}>Download CV</button>
        </div>
        
        <img className={style.heroImg} src={getImageUrl("hero/heroimage.png")} alt="user image" />
      
      <div className={style.topBlur} />
      <div className={style.bottomBlur} />
    </section>
  )
}

export default hero
