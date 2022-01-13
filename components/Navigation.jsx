import React from "react";
import styles from '../styles/Navigation.module.scss'
import Link from 'next/link'

const Navigation =(props)=>{
   const {isOpen} = props;
  return(

    <div className={`d-flex flex-column  ${styles.br} ${isOpen?styles.bro:styles.brc}`} >
      
       <div className={`d-flex ${styles.icon}`}>
        <Link href="/profile">
          <a> profile</a>
        </Link>
         
       </div>
       <div className={`d-flex ${styles.icon}`}>
       <Link href="/">
          <a> home</a>
        </Link>
         
       </div>
       <div className={`d-flex ${styles.icon}`}>
       <Link href="/doctor">
          <a> doctors</a>
        </Link>
        
       </div>
       <div className={`d-flex ${styles.icon}`}>
       <Link href="/visit">
          <a> visit</a>
        </Link>
       </div>
       <div className={`d-flex ${styles.icon}`}>
       <Link href="/transaction">
          <a> transaction</a>
        </Link>
       </div>
       <div className={`d-flex ${styles.icon}`}>
       <Link href="/exit">
          <a> exit</a>
        </Link>
       </div>
    </div>
  )
}

export default Navigation;