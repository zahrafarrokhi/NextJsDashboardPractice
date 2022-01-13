import React from "react";
import styles from "../styles/Tabs.module.scss";

const Tabs = (props) =>{
  const {tabs,selected,Onselect}=props;

  const doSelect = (bbb)=> {
    Onselect(bbb)
  }
  
  return(<div className={`d-flex m-2 ${styles.tabs}`}>
{tabs.map((bbb)=>(
    <div className={`
    d-flex ${styles.tab} ${
      selected==bbb ? styles.sl : styles.notsl
    }`}key={bbb} onClick={() =>doSelect(bbb)}>
      {bbb}
    </div>
  )
)}
  </div>)
}

export default Tabs;