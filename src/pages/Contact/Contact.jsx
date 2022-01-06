import React, {useState} from 'react'
import "./style.scss"
import SocialLinks from "../../component/SocialLink/SocialLink"
// import axios from "axios"
import {  toast } from 'react-toastify';


const  Contact = ()=> {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")



    const sendMessage = async(e)=>{
        e.preventDefault()
        try {
            // const url = ""
            // await axios.post(url, {name, email,message})
            toast.success("Message sent successfully", {hideProgressBar: true})
            
        } catch (error) {
            toast.error("An error occurred", {hideProgressBar: true})
        }

    }
    return (
        <main id="contact">
            <div id="contact-us">
                <section >
                    <h2> CONTACT</h2>
                    <article>
                        Thanks for your interest. If you'd like to get in touch with me, please contact me on social media or complete the following form.
                        <SocialLinks socialLink ={true} />
                        
                    </article>
                </section>
            </div>
            <div id='contact-form'>
                <form id='form' onSubmit={sendMessage}>
                    <input className='default-input-form'  type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Name *'  />
                    <input className='default-input-form' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email Address *'  />
                    <textarea  className='default-input-form'value={message} onChange={(e)=>setMessage(e.target.value)}  placeholder='Message *' />
                    <input   type="submit"  value="Send Message" />   
                </form>
            </div>

        </main>
    )
}

export default Contact