import React, { useRef } from 'react';
import { useState } from 'react';
import './style.css';
  let IND =-1;
const Home =()=>{
        
        const [data,setdata] =useState({FullName:"",RollNumber:"",SubjectName:"",ClassName:""})
        const [StudentInfo,setStudentInfo]=useState([])
        let InvalidText = useRef()
        const change =()=>{
            if(IND != -1){

            if(data["FullName"]=="" || data["RollNumber"]<=0 || data["SubjectName"] == "" || data["ClassName"] ==""){
              InvalidText.current.innerText ="Invalid input. Please enter valid input!"
              InvalidText.current.classList.add('danger')
              return
            }
              StudentInfo[IND]=data
              setStudentInfo([...StudentInfo])
              setdata({
                FullName:"",
                RollNumber:"",
                SubjectName:"",
                ClassName:"",
              })
              InvalidText.current.innerText =""

              IND = -1

            }else{

              if(data["FullName"]=="" || data["RollNumber"]<=0 || data["SubjectName"]=="" || data["ClassName"] ==""){
                InvalidText.current.innerText ="Invalid input. Please enter valid input!"
                InvalidText.current.classList.add('danger')
                return
              }
              StudentInfo.push(data)
              setStudentInfo([...StudentInfo])
              setdata({
                FullName:"",
                RollNumber:"",
                SubjectName:"",
                ClassName:"",
              })
              InvalidText.current.innerText =""
            }
          
        }
        const InputChange =(property,value)=>{
            setdata( preobj=>({
                ...preobj,
                [property]:value
            }))
        }
        const UpdateData =(indx)=>{
              setdata({
                 FullName:StudentInfo[indx]["FullName"],
                 RollNumber:StudentInfo[indx]["RollNumber"],
                 SubjectName:StudentInfo[indx]["SubjectName"],
                 ClassName:StudentInfo[indx]["ClassName"],
              })
              IND=indx
          

        }
        const DeleteItem =(index)=>{
                StudentInfo.splice(index,1)
                setStudentInfo([...StudentInfo])
        }
   return (
    <>
        
      <div className="InfoBox">
         
         <h1>Student Information</h1>
         <label htmlFor="">FullName :</label> 
        <input type="text" onChange={(e)=>{ InputChange("FullName",e.target.value)}} value={data.FullName} placeholder='Enter your name...' /> <br />
        <label htmlFor="" className='roll'>Roll  Num :</label> 
        <input type="text" onChange={(e)=>{ InputChange("RollNumber",e.target.value)}} value={data.RollNumber} placeholder='Enter roll.......' /> <br />
        <label htmlFor="">SubName :</label> 
        <input type="text" onChange={(e)=>{ InputChange("SubjectName",e.target.value)}} value={data.SubjectName} placeholder='Enter Subject.....' /> <br />
        <label htmlFor="" className='roll'>ClassName:</label> 
        <input type="text" onChange={(e)=>{ InputChange("ClassName",e.target.value)}}  value={data.ClassName } placeholder='Enter Class Name......'/> <br />
        <div ref={InvalidText}></div>
        <button onClick={change}>Save</button>
      </div>

        <div className='Information'>
            <h1>Informations are:</h1>

            <table>
               <tr>
                <th>Serial</th>
                <th>Student Name </th>
                <th>Roll Number</th>
                 <th>Subject Name</th>
                 <th>Class Name </th>
                 <th>Actions</th>
             
               </tr>
               {
                StudentInfo.map((values,indx)=>{
                      return(
                        <tr> 
                             <td>{indx+1}</td>
                            <td>{ values["FullName"]}</td>
                            <td>{values["RollNumber"]}</td>
                            <td>{values["SubjectName"]}</td>
                            <td>{values["ClassName"]}</td>
                             <button onClick={()=>{UpdateData(indx)}} className='update'>Update</button> 
                             <button onClick={()=>{ DeleteItem(indx)}} className='delete'>Delete</button>
                        </tr>
                      )
                })
               }  
            </table>
      
        </div>
    </>
   )
}
export default Home;