import React, { useState, useRef, forwardRef } from "react";
import Layout from "../../components/layout";
import Tabs from "../../components/Tabs";
import styles from '../../styles/PatientInfo.module.scss'
import DatePicker from "react-datepicker";
import { FcPlus } from "react-icons/fc";
import dynamic from 'next/dynamic'
// ImageComponent
const ImageComponent=(props)=>{
  const{data,value,onChange}= props;
  // fu is like a state and fu.current points to the input
  const fu =useRef(null);
  return(<div
    className={`m-3 ${styles.itemimg}`}
    >
    <img src={value ? URL.createObjectURL(value) : undefined} className={`${styles.img}`}/>
    <input type="file" 
    ref={fu}
    className="d-none"
    value=""
    // event get files
    onChange={e=>onChange(e.target.files[0])}
    />
    {/* both is func but onclick works like an event */}
    {/* click is a fun clicks on element in the moment 
    but onclick is caled after click becuse is a event */}
    
    <FcPlus  onClick={() => fu.current.click()} className={` ${styles.btnimg}`}/>

  </div>)
}
// inputcomponent
const InputComponent=(props)=>{
  const {data,value,onChange}= props;
  return(
    <div 
    className={`m-3 ${styles.item}`}
    >
      <label htmlFor="">{data.label}</label>
      <input type="text" 
      className="form-control" 
      value={value}
      /*event give us but we are looking for value then haveto use e.taget.value */
      onChange={e => onChange(e.target.value)}
      placeholder ={data.placeholder}

      />
    </div>
  )
};
const NumberComponent=(props)=>{
  const{data,value,onChange}=props;
  return(
    <div
    className={`m-3 ${styles.item}`}
    >
      <label htmlFor="">{data.label}</label>
      <input type="text"
      className="form-control"
      value={value}
      onChange={(e)=>onChange(e.target.value.replace(/\D/g,""))}
      placeholder ={data.placeholder}
       />
    </div>
  )
}
const DateComponent = (props) => {
  const {
     data, value, onChange,
  } = props;
  console.log('DATE: ', value);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <input className="form-control" onClick={onClick} ref={ref} value={value}/>
  ));
  return (
    <div
    className={`m-3 ${styles.item}`}
    >
      <label htmlFor={`field_${data.id}`}>{data.label}</label>
      {/* <DatePicker
        value={value}
        onChange={onChange}
        containerInputClassName={styles.info_datepicker_cnt}
        editable={!info.editable}
      /> */}
      <DatePicker selected={value} onChange={(date) => onChange(date)} customInput={
<ExampleCustomInput/>
      } />
    </div>
  );
};
const InputGenderComponent = (props) => {
  const {
    data, value, onChange,
  } = props;

  return (
    <div
    className={`m-3 ${styles.item}`}
    >
      <label htmlFor={`field_${data.id}`}>{data.label}</label>
      <select
        className="form-select form-control"
        aria-label=".form-select-lg"
        value={value}
        onChange={e => onChange(e.target.value)}   
       
      >
        <option value={null}></option>
        <option value="m">male</option>
        <option value="f">female</option>
        <option value="o">other</option>
      </select>
    </div>
  )};

const InputInsuranceComponent = (props) => {
  const {
    data,value, onChange,
  } = props;

  return (
    <div
      className={`m-3 ${styles.item}`}
    >
      <label htmlFor={`field_${data.id}`}>{data.label}</label>
      <select
        className="form-select form-control"
        aria-label=".form-select-lg"
        value={value}
        onChange={e => onChange(e.target.value)}
				// disabled={!data.editable}
			>
				<option value={false}>no</option>
				<option value={true}>yes</option>
      </select>
    </div>
  );
};
const TextareaComponent=(props) => {
  const {data,value,onChange}= props;
  return(
    <div 
    className={`m-3 ${styles.textareaitem}`}
    >
      <label htmlFor="">{data.label}</label>
      <textarea 
      className={`form-control ${styles.textarea}`} 
      value={value}
      /*event give us but we are looking for value then haveto use e.taget.value */
      onChange={e => onChange(e.target.value)}
      placeholder ={data.placeholder}
      cols={4}

      ></textarea >
    </div>
  )
}


const Profile = () => {
  // tab
  const [select,setSelect] = useState("info")
  const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
    ssr: false
  });
  const proftabs = [
    {
      id: "info",
      name: "personal information",
    },
    {
      id: "address",
      name: "manage addresses",
    },
    {
      id: "fun",
      name: "Fun",
    }
    
  ];
  const [address, setAddress] = useState({});
  const [profile, setProfile] = useState({}); // {}
  // {f_name: "atrin"}
  // {f_name: "atrin", l_name: "hojjat"}
  // const test = {zahra: "test", t: "atrin"}
  // let t = "zahra"
  // test.t => atrin
  // test["t"] => atrin
  // test[t] => test
  const INFO_PROFILE=[

    {
      id:"image",
      label:"Image",
      component: ImageComponent,
    },
    {
      id:"f_name",
      label:"First name",
      component: InputComponent,
    },
    {
      id:"l_name",
      label:"Last name",
      component: InputComponent,
    },
    {
      id: 'national_id',
      label: 'National id',
      // editable: true,
      component: NumberComponent,
    },
    {
      id:'phone_number',
      labe:'phone_number',
      placeholder:"09********",
      component: NumberComponent,

    },
    {
      id: 'date_of_birth',
      label: 'Date of birth',
      editable: true,
      component: DateComponent,
    },
    {
      id: 'gender',
      label: 'gender',
      editable: false,
      component: InputGenderComponent,
    },
    // {
    //   id: 'province',
    //   label: 'province',
    //   type: 'province',
    //   editable: false,
    //   component: InputCityComponent,
    // },
    // {
    //   id: 'city',
    //   label: 'city',
    //   type: 'city',
    //   editable: false,
    //   component: InputCityComponent,
    // },
    {
      id: 'has_social_security_insurance',
      label: 'Has social security insurance',
      editable: false,
      component: InputInsuranceComponent,
    },
    // {
    //   id: 'hasSupIns',
    //   label: 'Has supplementary insurance',
    //   editable: false,
    //   component: InputHasInsuranceComponent,
    // },
    // {
    //   id: 'supplementary_insurance',
    //   label: 'Supplementary insurance',
    //   editable: false,
    //   component: InputSupplementaryInsurance,
    // },

  ]
  const ADDRESS_FIELDS =[
    {
      id:"adress_name",
      label:"Address Name",
      component:InputComponent
    },
    {
      id:"postal_code",
      label:"Postal Code",
      component:NumberComponent
    },
    {
      id:"phone_number",
      label:"Phone Number",
      component:NumberComponent
    },
    {
      id:"name",
      label:"Reciever",
      component:InputComponent
    },
    {
      id:"address",
      label:"Adress",
      component:TextareaComponent
    },
  ]
  return (
    <div className={`d-flex flex-column `}>
      <Tabs onselect={(id)=>{setSelect(id)}} tabs={proftabs} selected={select} />
      {select=='info'&&
      (
        <div className="d-flex flex-wrap">
          {/* onChange get a value */}
          {INFO_PROFILE.map((_)=>(<_.component key={_.id} data={_} value={profile[_.id]} onChange={(value)=>{
            // let newprofile = profile;
            // newprofile[_.id]=value
            // setProfile(newprofile)
            console.log(profile, value)
            setProfile ({...profile, [_.id]:value})
          }}/>))}
        </div>
      )}
      {select == 'address'&&(
        <div className="d-flex">
          <div className="d-flex flex-wrap">
            {ADDRESS_FIELDS.map((_)=>(<_.component key={_.id} data={_} value={address[_.id]} onChange={(value)=>{
              // let newprofile = profile;
              // newprofile[_.id]=value
              // setProfile(newprofile)
              setProfile ({...address, [_.id]:value})
            }}/>))}
          </div>
          <div className={`d-flex ${styles.addresscnt}`}>
            <MapWithNoSSR position={address.location} setPosition={value => {
              setAddress({...address, location: value})
            }}/>
          </div>
        </div>
      )}
      {select == 'fun' && (
        <h1>this is not fun</h1>
      )}
    </div>
  );
};
Profile.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Profile;
