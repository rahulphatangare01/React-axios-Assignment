import React,{useState,useEffect} from 'react'
import axios from 'axios';
function ShowData() {

    const [students,setStudents]=useState([]);

    useEffect(() => {
      getAllStudents();
    
    },[])
    async function getAllStudents(){
        try {
        const students = await axios.get("https://6214ba6d89fad53b1f1ce10f.mockapi.io/students")
        //console.log(students.data)
        setStudents(students.data);
    } catch (error){
        console.log("Something is wrong")
    }
  }
  
  async function deleteData(id) {
    await axios.delete(`https://6214ba6d89fad53b1f1ce10f.mockapi.io/students/${id}`);
    var newstudent = students.filter((item)=>{
         return item.id !== id;
    })
    setStudents(newstudent);
    
 
} 
      

  return (
  <>
 
  {students.map((student,i)=>{
                    return (
                        
                        
                        
                        <div key={i} className="output">
                        {/* <h5 className='green' > Due Date </h5>
                         <h5 className='red' > Due Date Passed </h5> */}

                          <h3> {student.name} <span onClick={()=>deleteData(student.id)}><i class="fa fa-trash" aria-hidden="true"></i>
</span></h3>
                         
                          
                          </div>
                    )
                })} 
            
  </>
  )
}

export default ShowData