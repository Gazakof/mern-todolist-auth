import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Login = () => {
  return (
    <>
        <Navbar />
        <div className='flex items-center justify-center mt-24'>
          <di>
            <form onSubmit={() => {}}>
              <h4 className='text-2xl mb-7'>
                Login
              </h4>
              <input type='text' placeholder='Email' className='input-box' />
              <button type='submit' className='btn-primary'>
                Login
              </button>
              <p className='text-sm text-center mt-4'>
                Not register yet?{""}
                <Link to="/signup" className=''>
                  Create an Account
                </Link>
              </p>
            </form>
          </di>
        </div>
    </>
  )
}

export default Login