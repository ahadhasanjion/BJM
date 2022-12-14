import React, { useContext }  from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useTitle from '../../TitleHook/useTitle';


const Login = () => {
  useTitle('Log in')
    const {signInWithGoogle, signIn} = useContext(AuthContext);
    const location =useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
          toast('Login Successfully')
          navigate(from, {replace:true});
          form.reset();
        })
        .catch(error => console.error(error))
    }
    const  GoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
           const user = result.user;
           console.log(user)
           navigate(from, {replace: true})
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div className='flex justify-center items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-teal-600 text-white'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log in</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm text-start'>
                Email address
              </label>
              <input
                
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-white focus:border-white bg-white text-teal-600'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='password' className='block mb-2 text-sm text-start'>
                Password
              </label>
              <input
                
                type='password'
                name='password'
                id='password'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-white focus:border-white bg-white text-teal-600'
                data-temp-mail-org='0'
              />
            </div>
           
          </div>

          <div>
            <button style={{border: '1px solid white'}}
              type='submit'
              className='w-full px-8 py-3 font-semibold rounded-md hover:text-white text-white hover:bg-teal-600'
            >
             Log in
            </button>
          </div>
        </form>

        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 '></div>
          <p  className='font-bold pb-2'>
            OR
          </p>
          <div className='flex-1 h-px sm:w-16'></div>
        </div>
        <div className='flex justify-center space-x-4'>
          <button
            onClick={GoogleSignIn}
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
          Don't have an account yet?{' '}
          <Link to='/signup' className='hover:underline text-white'>
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
       
    );
};

export default Login;