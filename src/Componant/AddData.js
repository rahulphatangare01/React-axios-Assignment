
import React,{useState} from 'react'
import ShowData from './ShowData'
import axios from 'axios'

function AddData() {
    const [students,setStudents]=useState({
        name : '',
        // email : ''
      });
      const [status,setStatus]=useState();
      const handleChange=(e)=>{
        setStudents({
          ...students, [e.target.name] : e.target.value})
        //console.log(students)
        }
       
    async function addData(e) {
      
        try {
          await axios.post(`https://6214ba6d89fad53b1f1ce10f.mockapi.io/students`,students)
         setStatus(true)
         
     } catch (error){
         console.log("Something is wrong")
     }
      }
      if (status){
        return <AddData/>//function return
      }
  return (
  <>
 <div className='container'>
    <div className='header'>
     <h2> Digikull Students</h2>
</div>

     <h3>Hello User</h3>
        
        
        
         <input type="text" onChange={e=> handleChange(e)} placeholder='your name' name="name" id="" />
         {/* <input type="email" onChange={e=> handleChange(e)} placeholder='your email' name='email' /> */}
        
         <button  onClick={addData}>Add student</button>
         
         </div>
 
     <ShowData/>
     
     
    
  </>
  )
}

export default AddData