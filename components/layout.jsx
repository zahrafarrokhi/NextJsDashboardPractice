import React from "react";
import Navigation from "./Navigation";

const Layout = (props)=>{
  const {children} = props;
  return(
    <div className={`d-flex `}>
      <Navigation/>    
      <div className={`flex-grow-1`}>
      {children}
      </div> 
    </div>
  )
}

export default Layout;