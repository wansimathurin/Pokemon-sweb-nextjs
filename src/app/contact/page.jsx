"use client"
import Navbar from "@/components/navbarComponent/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { FaHeart } from "react-icons/fa";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const page = () => {
  const notify = () => toast('Wow so easy !');
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    return (
        <>
        <Navbar />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                
          <ToastContainer
            position="top-center"
          /> 
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        
        {/* Left Side Image */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <img
            src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24458108/captain_pikachu.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <form className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                  placeholder="Your Name"
                  name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                name="message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
               type="button"
               onClick={()=>notify()}
              className="w-full bg-[#F6C63E] text-white py-2 rounded-md hover:bg-amber-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
       </>
    )
}

export default page;