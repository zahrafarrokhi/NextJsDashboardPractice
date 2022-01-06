import React from "react";
import styles from '../styles/Navigation.module.scss'

const Navigation =(props)=>{
  return(

    <div className={`d-flex flex-column  ${styles.br}`} >
       <div className={`d-flex ${styles.icon}`}>
          doctors
       </div>
       <div className={`d-flex ${styles.icon}`}>
          doctors
       </div>
       <div className={`d-flex ${styles.icon}`}>
          doctors
       </div>
       <div className={`d-flex ${styles.icon}`}>
          doctors
       </div>
       <div className={`d-flex ${styles.icon}`}>
          doctors
       </div>
    </div>
  )
}

export default Navigation;