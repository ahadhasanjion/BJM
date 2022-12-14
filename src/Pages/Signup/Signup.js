import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../TitleHook/useTitle';



const Signup = () => {
  useTitle('SignUp')
    const {createUser,signInWithGoogle} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
          const user = result.user;
          toast('You are now our registered customer')
          console.log(user);
          navigate(from, {replace:true})
          form.reset();
        })
        .catch(error => console.error(error))
    }
    const googleSignIn = () => {
        signInWithGoogle()
        .then(result => {
           const user = result.user;
           console.log(user)
           toast('You are now our registered customer')
           navigate(from, {replace:true})

        })
        .catch(error => console.error(error))
    }
    return (
        
        <div className='flex justify-center items-center pt-8'>
        <div className='flex flex-col max-w-md p-6 rounded-md text-white sm:p-10 bg-teal-600'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Register</h1>
            <p className='text-sm text-white'>Create a new account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-12 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm text-start'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Enter Your Name Here'
                  className='w-full px-3 py-2 border rounded-md border-white focus:border-teal-600 bg-white text-teal-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm text-start'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-white focus:border-teal-600 bg-white text-teal-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <label htmlFor='password' className='text-sm text-start'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='password'
                  className='w-full px-3 py-2 border rounded-md border-white bg-white focus:border-teal-600 text-teal-900'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <div>
                <button style={{border: '1px solid white'}}
                  type='submit'
                  className='w-full px-8 py-3 font-semibold rounded-md  hover:text-white text-white hover:border-none'
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 '></div>
            <p className='px-3 text-sm'>
              Signup with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 '></div>
          </div>
          <div className='flex justify-center space-x-4'>
            <button
              onClick={googleSignIn}
              aria-label='Log in with Google'
              className='p-3 rounded-sm'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fill-current'
              >
                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
              </svg>
            </button>
          </div>
          <p className='px-6 text-sm text-center text-white'>
            Already have an account yet?{' '}
            <Link to='/login' className='hover:underline text-white'>
              Sign In
            </Link>
            
          </p>
        </div>
      </div>
    );
};

export default Signup;