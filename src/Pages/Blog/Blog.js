import React from 'react';
import useTitle from '../../TitleHook/useTitle';

const Blog = () => {
  useTitle('Blog')
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
           Blog
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
          quick Question, The Quick Answer
        </h2>
        
      </div>
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          
          <h2
            
            className="inline-block text-teal-600 max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Nori grape silver beet broccoli kombu beet"
          >
            Difference between SQL and NoSQL?
          </h2>
          <p className="max-w-xs mx-auto mb-2 text-teal-600 font-semibold">
          SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQ
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          
          <h2
            
            className="inline-block max-w-xs mx-auto text-teal-600  mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Well, the way they make shows is, they make one"
          >
            What is JWT, and how does it work?
          </h2>
          <p className="max-w-xs mx-auto mb-2 text-teal-600 font-semibold">
          What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)
          </p>
         
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <h2 className="inline-block max-w-xs text-teal-600 mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            What is the difference between javascript and NodeJS?
          </h2>
          <p className="max-w-xs mx-auto mb-2 text-teal-600 font-semibold">
          JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
          </p>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <h2 className="inline-block max-w-xs text-teal-600 mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            How does NodeJS handle multiple requests at the same time?
          </h2>
          <p className="max-w-xs mx-auto mb-2 text-teal-600 font-semibold">
          How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
          </p>
        </div>
      </div>
    </div>
    );
};

export default Blog;