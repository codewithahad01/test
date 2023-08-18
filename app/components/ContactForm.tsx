'use client'

import React, { useState } from 'react';
import doodle from '../../public/doodle.svg';
import Image from 'next/image';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = () => {
    const { name, email, message } = formData;
    if (name === '' || email === '' || message === '') {
      alert('Please fill the form first');
    }
    else {
      const mailtoLink = `mailto:abdulahad.ahmadi66@gmail.com.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AMessage:%20${message}`;
      window.location.href = mailtoLink;
    }
    // set the form empty after submission of the form data to the email address provided in the mailtoLink variable above 
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    // if form is empty then alert the user to fill the form first 
  };

  return (
    <div className="grid max-w-screen-xl gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 my-10">
      <div className="flex flex-col justify-between items-center mt-56 md:mt-0">
        <div className='flex flex-row-reverse justify-center items-center gap-2 ring-1 rounded-md px-3 py-1 hover:cursor-pointer hover:bg-cyan-500 hover:text-white'>
          <Link href='/' passHref className='flex flex-row justify-center items-center gap-1 md:gap-3'>
            <span>back to home</span>
            <BiArrowBack />
          </Link>
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-bold  lg:text-5xl">Let's talk!</h2>
          <div className="dark:text-gray-400">Fill in the form to start a conversation.</div>
        </div>
        <Image width={450} src={doodle} alt="doodle image" className="p-6" />
      </div>
      <div className="space-y-4 md:mt-8">
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
            rows={4}
            required
          />
        </div>
        <div>
          <button
            type="button"
            onClick={sendEmail}
            className="w-full ring-1 text-white py-2 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
