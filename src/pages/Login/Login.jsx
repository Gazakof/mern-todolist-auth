import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Login = () => {
  return (
    <>
        <Navbar />
        <div>
          <di>
            <form onSubmit={() => {}}>
              <h4 className='text-2xl mb-7'>
                Login
              </h4>
              <input type='text' placeholder='Email' className='input-box' />
              <button type='submit' className='btn-primary'>
                Login
              </button>
            </form>
          </di>
        </div>
    </>
  )
}

export default Login