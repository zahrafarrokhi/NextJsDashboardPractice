import Modal from "../components/Modal";
import React, { useState } from "react";
import styles from '../styles/DoctorItem.module.scss'

const DoctorITem=(props)=>{
  const{data} =props;
  const[open,setOpen]=useState(false)
  const setModal=()=>{
    setOpen(true)
  }
   return(

    <div className={`d-flex flex-row m-1 p-2 ${styles.cnt}`}>
     <div className="d-flex flex-column">
       <img src={data.image} className={`${styles.img}`}/>
     
     </div>
     <div className="m-1 d-flex flex-column flex-grow-1">
       
      
               <div className={`d-flex flex-row ${styles.department}`}>
         {data.department_name}
        
      </div>
      <div className={`d-flex flex-row ${styles.name}`}>
         {data.f_name}{' '}
          {data.l_name}
      </div>
      <div className={`d-flex flex-row ${styles.profession}`}>
         {data.profession}
               </div>
      <div className="d-flex flex-row-reverse">
        <button className="btn btn-primary m-1">Request visit</button>

        <button className="btn btn-outline-primary m-1"onClick={setModal}>View profile</button>
      </div>
     </div>
     <Modal open={open} setOpen={setOpen}>
       
     </Modal>
     {/* <div className={`${styles.modalbg} ${open?'':'d-none'} `} onClick={(e)=>(setOpen(false))}>
     <div className={`p-2 ${styles.modal}`} onClick={(e)=>(e.stopPropagation())}>
a;ldskjfa;dslkfja;dsflkaj
     <div className={`${styles.x}`}onClick={(e)=>(setOpen(false))}>X</div>
     </div>
     </div> */}
     
    </div>
   )


}

export default DoctorITem;