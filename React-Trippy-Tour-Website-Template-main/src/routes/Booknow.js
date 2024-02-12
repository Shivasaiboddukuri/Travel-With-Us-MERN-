import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Booknow() {
    let [formdata,setFormData] = useState({
        Name:'',
        email:'',
        places:'',
        persons:'',
        Date:''
        
        
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
      <h1>Booking Closes Soon!</h1>
      <form>
        <input placeholder="Name"value={formdata.Name} onChange={handleOnchange} name='Name'/>
        <input placeholder="Email"type='email'value={formdata.email} onChange={handleOnchange} name='email'/>
        <input placeholder="place"value={formdata.places} onChange={handleOnchange} name='places'/>
        <input placeholder="persons" value={formdata.persons} onChange={handleOnchange} name='persons' />
        <input placeholder="Date" type='date'value={formdata.Date} onChange={handleOnchange} name='Date'/>
        <button onClick={handlesubmit}>Book Now</button>
      </form>
    </div>
    </div>
  )
}

export default Booknow
