import React from 'react';
import { motion, useTransform } from "framer-motion";
import { ScrollReveal } from "reveal-on-scroll-react";
import Form from '../components/Form';

function LoginPage() {
  

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full' style={{backgroundImage: 'linear-gradient(115deg, #9F7AEA, #FEE2FE)'}}>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nJTIwYXN0aGV0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60' />
      </div>
        <div className='bg-gray-800 flex flex-col justify-center'>
            <h1  className="text-white text-4xl mb-3 flex justify-center mt-4">Welcome</h1>
      <div className="text-white text-lg mb-10">
          Where developers Tweet Tweet Tweet       
      </div>
      <div className="">
          <Form className='max-w-[400px]  mx-auto rounded-lg bg-gray-900 p-8 px-8'/>
      </div>
      </div>
    </div>
  

  );
}

export default LoginPage;
