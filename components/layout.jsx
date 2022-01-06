import React,{useState} from "react";
import Navigation from "./Navigation";

const Layout = (props)=>{
  const {children} = props;
  const [open,setOpen]=useState(false);
  return(
    <div className={`d-flex `}>
      <div onClick={()=>{setOpen(!open)}}>hello</div>
      {open&&<Navigation/>  }  
      <div className={`flex-grow-1`}>
      {children}
      </div> 
    </div>
  )
}

export default Layout;