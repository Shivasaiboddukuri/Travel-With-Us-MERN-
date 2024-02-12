import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function Signup() {
    // let [email,setEmail] = useState("")
  // let [password,setPassword] = useState("")
  // let [address,setAddress] = useState("")

  let [formdata,setFormData] = useState({
    Name:'',
    email:'',
    phoneNumber:'',
    password:'',
    ConfirmPassword:'',
    address:'',
    city:'',
    state:'',
    pincode:''
  })
  const handleOnchange = (e) =>{
   let {name,value} = e.target  //destructu
    setFormData({
     ...formdata,
       [name]:value       
    })
  }
  const handlesubmit = (e)=>{
    e.preventDefault();
    console.log(formdata)
    
     let register = async () =>{
      try{
        let response = await axios.post("http://localhost:5009/register",formdata)
        console.log(response)
      }catch(err){
        console.log(err)

      }


     }
     register()
  }
  return (
    <div>
        <div className="from-container">
      <h1>Signup To Get Package Details</h1>
      <form>
        <input placeholder="Name" value={formdata.Name} onChange={handleOnchange} name='Name'/>
        <input placeholder="Email"typeof='email'value={formdata.email} onChange={handleOnchange} name='email'/>
        <input placeholder="PhoneNumber"value={formdata.phoneNumber} onChange={handleOnchange}name='phoneNumber'/>
        <input placeholder="CreatePassword" type='password'value={formdata.password} onChange={handleOnchange}name='password'/>
        <input placeholder="ConfirmPassword" type='password'value={formdata.ConfirmPassword} onChange={handleOnchange}name='ConfirmPassword'/>
        <input placeholder="address"value={formdata.address} onChange={handleOnchange}name='address'/>
        <input placeholder="city"value={formdata.city} onChange={handleOnchange}name='city'/>
        <input placeholder="state"value={formdata.state} onChange={handleOnchange}name='state'/>
        <input placeholder="Pincode"type='number'value={formdata.pincode} onChange={handleOnchange}name='pincode'/>
        <button onClick={handlesubmit}>Signup</button>
      </form>
    </div>
    </div>
  )
}

export default Signup
