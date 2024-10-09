import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = ({id}) => {
    const [loading, setLoading] = useState(false);
    const form = useRef();




    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(form.current);
        
    
        emailjs.sendForm('service_ngrottd','template_contact', form.current,`${import.meta.env.VITE_EMAILJS_KEY}`)
          .then((result) => {
              setLoading(false);
              alert('Message sent successfully!');
          }, (error) => {
              setLoading(false);
              alert('Failed to send the message.');
          });
    
        e.target.reset();
      };













  return (
   <section className='max-w-7xl mx-auto mt-32 h-screen w-full relative' id={id}>
   

    <div className="flex justify-center items-center w-[90%] h-[98%] mx-auto relative">
        <img src="/assets/terminal.png" alt="" className='absolute inset-0 h-full w-full drop-shadow-2xl z-0' />
        <img src="/assets/spotlight1.png" alt="" className='absolute top-5 right-5 h-full z-0' />
        <div className="max-w-2xl relative  m-auto z-10 sm:px-10 px-5 mt-12;">
        <h1 className='grid-headtext text-secondary'>Contact Us</h1>


        <p className="text-sm sm:text-lg text-third mt-3 ">Feel free to Feedback Us. Your Feedback is valuable to Us, Thankyou!!</p>
                    <form ref={form} className='flex flex-col space-y-7 mt-12' onSubmit={sendEmail}>
                        <label className='space-y-3 w-full flex flex-col' htmlFor="" >
                            <span className="text-white/80 text-base sm:text-xl">Full Name:</span>
                            <input type="text" name='name'  required className='w-[80%] mx-auto sm:w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-base sm:text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none;' placeholder='John Doe' />
                        </label>
                        <label className='space-y-3 flex flex-col ' htmlFor="" >
                            <span className="text-white/80 text-base sm:text-xl">Email:</span>
                            <input type="email" name='email'  required className='w-[80%] mx-auto sm:w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-base sm:text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none;' placeholder='Johndoe@gmail.com' />
                        </label>
                        <label className='space-y-3 flex flex-col' htmlFor="" >
                            <span className="text-white/80 text-base sm:text-xl">Your Message:</span>
                            <textarea name="message" id="message" rows={5} maxLength={500} className='w-[80%] mx-auto sm:w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-base sm:text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none;' placeholder="Hi, I Liked your Website ...." style={{resize:"none"}}/>
                        </label>
                        <button className={`${loading? "bg-purple-200": "bg-primary" } px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-third gap-3`} type='submit' >
                        {loading ? 'Sending...' : 'Send'}
                           
                            <img src="/assets/arrow-up.png" className=' w-2.5 h-2.5 object-contain invert brightness-105' alt="" />
                        </button>
                    </form>

        </div>
    </div>
   </section>
  )
}

export default Contact