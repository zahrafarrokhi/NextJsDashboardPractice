import React from "react";
import styles from '../styles/Navigation.module.scss'

const Navigation =(props)=>{
   const {isOpen} = props;
  return(

    <div className={`d-flex flex-column  ${styles.br} ${isOpen?styles.bro:styles.brc}`} >
      
       <div className={`d-flex ${styles.icon}`}>
          profile
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