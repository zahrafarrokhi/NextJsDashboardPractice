import React from "react";
import styles from '../styles/ModalItem.module.scss'

const Modal = (props) => {
  const{open,setOpen, children}=props;
  // const[open, setOpen] = useState()
  return(
    <div className={`${styles.modalbg} ${open?'':'d-none'} `} onClick={(e)=>(setOpen(false))}>
    <div className={`p-2 ${styles.modal}`} onClick={(e)=>(e.stopPropagation())}>
    <div className={`${styles.x}`}onClick={(e)=>(setOpen(false))}>X</div>
    {children}
    </div>
    </div>

  )

}
export default Modal;