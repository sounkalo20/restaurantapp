import React from 'react'

const Header = () => {
  return (
    <div className='fixed w-screen z-50 bg-slate-300 p-6 px-16'>
        {/* ordinateur et tablette */}
        <div className='hidden md:flex w-full h-full bg-red-600 p4'></div>        
        
        {/* phone */}
        <div className='hidden md:flex w-full h-full bg-blue-500 p4'></div>
    </div>
  )
}

export default Header