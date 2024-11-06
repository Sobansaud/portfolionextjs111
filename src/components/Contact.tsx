import React from 'react'
import { IoMailUnreadSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";




const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
     <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl'data-aos="zoom-in-up">Get In Touch</h2>
            <p data-aos="zoom-in-up" className='text-gray-700 text-[18px] pt-2'>
               <b> <i>Drop Me A Line , Give Me A Call Or Send Me A Message By Submitting The Form </i></b>
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <IoMailUnreadSharp size={30}/> sobansaud3@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <IoCall  size={30}/> 0329-9274846
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <FaGlobe  size={30}/> Karachi , Pakistan
            </div>
        </div>

        <div className='space-y-8' data-aos="zoom-in-up">
            <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='h-[40px] bg-transparent  border border-accent' id='name'></input>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor='email'>E-Mail</label>
                <input type='text' className='h-[40px] bg-transparent  border border-accent' id='email'></input>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='msg'>Message</label>
                <textarea  
                className='bg-transparent  border border-accent' id='msg' rows={8}></textarea>
            </div>

            <button data-aos="zoom-in-up"className='bg-yellow-500 pt-2 px-6'>Send</button>
        </div>
     </div>
    </div>
  )
}

export default Contact