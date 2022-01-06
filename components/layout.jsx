import React,{useState} from "react";
import Navigation from "./Navigation";
import shape from '../styles/Layout.module.scss'
const Layout = (props)=>{
  const {children} = props;
  const [open,setOpen]=useState(false);
  return(
    <div className={`d-flex `}>
      <div onClick={()=>{setOpen(!open)}} className={`d-flex align-items-center justify-content-center  ${shape.navbut} ${open?shape.opnav:shape.clnav}`}>
        {open ?'x':'+'}
     
        </div>
      {/* {open&&<Navigation/>  }   */}
      <Navigation isOpen={open}/>
      <div className={`flex-grow-1`}>
      {children}
      </div> 
    </div>
  )
}

export default Layout;