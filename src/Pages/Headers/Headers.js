import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Headers = () => {
  const {user,logOut} = useContext(AuthContext) 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
      logOut()
      .then(result => console.log(result))
      .catch(error => console.error(error))
    }
    return (
        <div class="bg-white">
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-teal-600 font-bold">
                <div class="relative flex items-center justify-between">
                  <a href="/"aria-label="Company" title="Company" class="inline-flex items-center">
                      <svg class="w-8 text-teal-accent-400" viewBox="0 0 24 24"strokeLinejoin="round"strokeWidth="2"
                        strokeLinecap="round"strokeMiterlimit="10"stroke="currentColor"fill="none">
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span class="ml-2 text-xl font-bold tracking-wide text-teal-600 uppercase">
                         BJM
                      </span>
                  </a>
                  <ul class="flex items-center hidden space-x-8 lg:flex">
                    <li> 
                      <Link to="/services"aria-label="Services"title="Services"
                        className={({isActive})=> isActive? "font-medium tracking-wide text-teal-600           transition-colors duration-200 hover:text-deep-purple-accent-400" 
                        : "font-medium tracking-wide text-teal-600 transition-colors duration-200         hover:text-deep-purple-accent-400"}>
                         Services
                      </Link>
                    </li>
                    
                      {
                        user?.email?
                        <>
                          <li>
                          <Link to="/myReview"aria-label="Services"title="Services"
                        className={({isActive})=> isActive? "font-medium tracking-wide text-teal-600           transition-colors duration-200 hover:text-deep-purple-accent-400" 
                        : "font-medium tracking-wide text-teal-600 transition-colors duration-200         hover:text-deep-purple-accent-400"}>
                         My Review
                        </Link>
                        </li>
                         
                         <li>
                          <Link to="/addServices"aria-label="Services"title="Services"
                         className={({isActive})=> isActive? "font-medium tracking-wide text-teal-600           transition-colors duration-200 hover:text-deep-purple-accent-400" 
                         : "font-medium tracking-wide text-teal-600 transition-colors duration-200         hover:text-deep-purple-accent-400"}>
                          Add Services
                        </Link>
                         </li>
                        </>
                         :
                         <p></p>
                    
                      } 
                     
                    <li> 
                      <Link to="/blog"aria-label="Blog"title="Blog"
                        className={({isActive})=> isActive? "font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-deep-purple-accent-400" 
                      : "font-medium tracking-wide text-teal-600 transition-colors duration-200        hover:text-deep-purple-accent-400"}>
                      Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/aboutus"aria-label="AboutUs"title="AboutUs"
                      className={({isActive})=> isActive? "font-medium tracking-wide text-teal-600         transition-colors duration-200 hover:text-deep-purple-accent-400" 
                      : "font-medium tracking-wide text-teal-600 transition-colors duration-200         hover:text-deep-purple-accent-400"}>
                      About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact"aria-label="AboutUs"title="AboutUs"
                      className={({isActive})=> isActive? "font-medium tracking-wide text-teal-600         transition-colors duration-200 hover:text-deep-purple-accent-400" 
                      : "font-medium tracking-wide text-teal-600 transition-colors duration-200         hover:text-deep-purple-accent-400"}>
                      Contact
                      </Link>
                    </li>
                    {
                          user?.uid?
            
                          <li className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" onClick={handleLogOut}>Log Out</li>
                          
                          :

                          <li>
                        <Link to="/login"class="inline-flex items-center justify-center h-12  font-medium         tracking-wide text-teal-600"aria-label="Sign up"title="Sign up">
                        Log in
                      </Link>
                       </li>
                    }
                    
                  </ul>
                  <div class="lg:hidden">
                    <button aria-label="Open Menu" title="Open Menu" class="p-2 -mr-1 transition duration-200   rounded focus:outline-none focus:shadow-outline"onClick={() => setIsMenuOpen(true)}>
                      <svg class="w-5 text-teal-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                        />
                        <path
                          fill="currentColor"
                          d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                        />
                        <path
                          fill="currentColor"
                          d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                        />
                      </svg>
                    </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 text-teal-600 border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <svg
                            class="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span class="ml-2 text-xl font-bold tracking-wide text-teal-600 uppercase">
                            Company
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-teal-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                        <Link
                          to="/courses"
                          aria-label="Topics"
                          title="Topics"
                          className="font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                        </li>
                        <li>
                        <Link
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className="font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                        </li>
                        <li>
                        <Link
                          to="/aboutus"
                          aria-label="AboutUs"
                          title="AboutUs"
                          className="font-medium tracking-wide text-teal-600 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About Us
                        </Link>
                        </li>
                      </ul>
                      <div class="sm:flex sm:gap-4 justify-center">
                      {
                          user?.uid &&
            
                          <li className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" onClick={handleLogOut}>Log Out</li>
                      }
                      {   <Link class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" to="/login">
                           Login
                         </Link>
                      }
        </div>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Headers;