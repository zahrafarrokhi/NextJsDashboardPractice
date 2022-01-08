import React, { useState } from "react";
import Layout from "../../components/layout";
import Tabs from "../../components/Tabs";

const Profile = () => {
  const [select,setSelect] = useState()
  const proftabs = [
    {
      id: "info",
      name: "personal information",
    },
    {
      id: "address",
      name: "manage addresses",
    },
  ];
  return (
    <div className={`d-flex`}>
      <Tabs onselect={(id)=>{setSelect(id)}} tabs={proftabs} selected={select} />
      {select=='info'&&
      (
        <h1>Information</h1>
      )}
      {select == 'address'&&(
         <h1>adress</h1>
      )}
    </div>
  );
};
Profile.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Profile;
