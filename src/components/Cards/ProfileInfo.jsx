import React from 'react'

const ProfileInfo = ({ onLogout }) => {
  return (
    <>
        <div className='flex items-center gap-3'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 bg-slate-100'>
            
            </div>
            <div>
                <p className='text-sm font-medium'>
                    William
                </p>
                <button className='' onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    </>
  )
}

export default ProfileInfo