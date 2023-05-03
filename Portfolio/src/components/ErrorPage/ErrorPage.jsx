import React from 'react'
import { Link } from "react-router-dom";
import gif from '../../assets/webConstruccion.gif'
import style from '../ErrorPage/StyleErrorPage.module.css'
export const ErrorPage = () => {
  return (
    <div className={style.content}>
      <div className={style.contentLinks}>
        <h1>Derek Cabrera</h1>
        <div  className={style.contentIconsTitle}> 
        <div className={style.iconImg}>
          <a href="https://www.linkedin.com/in/derek-cabrera-frontend/">
             <img className={style.icon} src="https://img1.freepng.es/20171221/lww/linkedin-png-picture-5a3c18567d0457.7108240415138878305121.jpg" alt="not-found" />
             <span className={style.titleLink}>Linkedin</span>
          </a>
        </div>
        <div className={style.iconImg}>
          <a href="https://github.com/DeeRo-dev">
             <img className={style.icon} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="not-found" />
             <span className={style.titleLink}>Git Hub</span>
          </a>
        </div>
        </div>
        </div>
      <div className={style.contentImg} >
        <img className={style.img} src={gif}/>
      </div>
    </div>
  )
}
