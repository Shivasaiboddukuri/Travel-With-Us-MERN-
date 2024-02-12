import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function SignIn() {
    let navigate=useNavigate()
    let [formdata,setformdata]=useState({
    email:'',
    password:''
    })
    let [data,setdata]=useState('')
    let HandleChange=(e)=>{
       
        let{name,value}=e.target;
        setformdata({
            ...formdata,
            [name]:value
        })    
    }
    let onsubmit=(e)=>{
        e.preventDefault();   
        
        let login= async () => {
          try {
            let response = await axios.post("http://localhost:5009/login",formdata)
            
            if(response) {
              alert("Login Successfull");
              console.log(formdata)
              setformdata({
                email:'',
                password:''
               })
               setdata(response)
               navigate('/')
            }
            else {
              alert("login Unsucessfull");
              setformdata({
                email:'',
                password:''
               })
            }
            }
            // alert(response.data)
            
            catch (err) {
              console.log(err)
            }
    
          }
         
       login()
        
       }
  return (
    <div>
      <div className="from-container">
      <h1>Sign In</h1>
      <form>
        <input name='email' value={formdata.email} type="email" onChange={HandleChange} placeholder="Email / PhoneNumber"/>
        <input name='password'value={formdata.password} onChange={HandleChange} placeholder="Password" type='password'/>
        <button onClick={onsubmit}>Send</button>
      </form>
    </div>
    </div>
  )
}

export default SignIn
