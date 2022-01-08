import React, { useState } from "react";
import styles from "../styles/Tabs.module.scss";
import PropTypes from 'prop-types'
/*
[
  {
    id:
    name:
  }
]
*/
const Tabs = (props) => {
  const { tabs ,onselect, selected} = props;
  // const [selected, select] = useState();

  const doselect = (selected_tab_id) => {
    // select(selected_tab_id);
    onselect(selected_tab_id)
  };
  return (
    <div className={`d-flex m-2 ${styles.tabs}`}>
      {tabs.map((item) => {
        return (
          <div
            className={`d-flex ${styles.tab} ${
              selected == item.id ? styles.sl : styles.notsl
            }`}
            onClick={() => doselect(item.id)}
            key={item.id}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  onselect:PropTypes.func,
}

export default Tabs;
