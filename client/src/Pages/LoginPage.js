import React from 'react';
import { motion, useTransform } from "framer-motion";
import { ScrollReveal } from "reveal-on-scroll-react";
import Form from '../components/Form';

function LoginPage() {
  

  return (
    <div className="h-screen w-full bg-purple-900 flex flex-col items-center justify-center text-white">
      <ScrollReveal.h1 animation="slide-in-right" className="text-4xl font-bold mb-4">
        TweetCode
      </ScrollReveal.h1>
      <ScrollReveal.div animation="slide-in-left" className="text-xl mb-10"
>
        Where developers tweet tweet tweet
      </ScrollReveal.div>
      <ScrollReveal.div animation="slide-in-bottom" className="w-1/3 p-8 bg-white rounded-md shadow-lg"
>
        
      
          <Form />
        
      </ScrollReveal.div>
    </div>
  );
}

export default LoginPage;
