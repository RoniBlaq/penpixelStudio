'use client'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

export default function Contact() { 
     const formRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_0hjlrlr",
            "template_b9dnozd",
             formRef.current,
             "acidpvQS8ynKSoArB"
        )
        .then(() => {
          alert('Booking sent successfully!')
        })
        .catch((error) => {
            console.log(error)
        })
    }
 return ( 
 <section id='Contact' className="min-h-screen flex items-center justify-center px-6">
 <form ref={formRef} onSubmit={sendEmail} className="w-full max-w-lg space-y-6">
 <h2 className="text-3xl font-serif">
Book a Session
</h2>
 <input name="name" type="text" className="w-full bg-transparent border border-white/20 p-3 rounded-lg cursor-pointer" placeholder="Your Name" required /> 

 <input name="email" type="email"  className="w-full bg-transparent border border-white/20 p-3 rounded-lg cursor-pointer" placeholder="Email Address" required />

 <input name="phone" type="tel"  className="w-full cursor-pointer bg-transparent border border-white/20 p-3 rounded-lg" placeholder="Phone No" required />

<div className="relative">
 <input name="session" list="sessions" type="text" className="w-full bg-transparent border border-white/20 p-3 rounded-lg cursor-pointer" placeholder="Session.." required />
 <datalist id="sessions">
    <option value="Birthday Shoot"/>
     <option value="Wedding"/>
      <option value="Portraits"/>
       <option value="Others"/>
 </datalist>
</div>

 <textarea name="message" className="w-full bg-transparent border border-white/20 p-3 rounded-lg cursor-pointer" placeholder="Tell us about your event" required />
 <button type="submit" className="w-50 bg-white ml-14 py-3 rounded-full cursor-pointer bg-[url('/images/joanna.jpg')] bg-cover bg-center bg-no-repeat"> 
 Send Request </button>
 </form>
 </section>
 )
}