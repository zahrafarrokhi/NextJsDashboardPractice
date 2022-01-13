import React,{useState,useEffect} from "react";
import Layout from "../../components/layout";
import axios from "axios";
import DoctorITem from "../../components/DoctorItem";
import Tabs from '../../components/Tabs2ElectricBoogooloo'

const Doctor = ()=>{
  const[error,setError]=useState("")
  const [doctors,setDoctors] = useState([])
  const[selected,Onselect]=useState()
  const tabs = ['tab1', 'tab2','tab3']
  const loadDoctors = async()=>{
   try {

    const res = await axios.get('http://localhost:8000/doctor/doctor/')
     setDoctors(res.data) 
   } catch (error) {
     setError("couldn't load doctors")
   }
  }
  useEffect(() => {
    loadDoctors()
  }, [])
  return(
    <div>
      <Tabs tabs={tabs} selected={selected} Onselect={Onselect}/>
     {doctors.map((dr)=>(
       <DoctorITem data={dr} key={dr.id}/>
     ))}
    </div>
  )

}
Doctor.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
export default Doctor;