import "./ContactFormStyles.css";
import axios from "axios";
import { useState } from "react";

function ContactForm() {
  let [formdata,setFormData] = useState({
    Name:'',
    email:'',
    subject:'',
    message:''
    
    
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
        alert('message is sent ')
      }catch(err){
        console.log(err)

      }


     }
     register()
  }
  return (
    <div className="from-container">
      <h1>Chat With Us !</h1>
      <form>
        <input placeholder="Name" value={formdata.Name} onChange={handleOnchange} name='Name'/>
        <input placeholder="Email"value={formdata.email} onChange={handleOnchange} name='email'/>
        <input placeholder="Subject"value={formdata.subject} onChange={handleOnchange} name='subject'/>
        <textarea placeholder="Message" rows="4"value={formdata.message} onChange={handleOnchange} name='message'></textarea>
        <button onClick={handlesubmit}  >Send Message </button>
        
      </form>
    </div>
  );
}

export default ContactForm;
