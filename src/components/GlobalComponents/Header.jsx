import React from 'react'

function Header({backTitle, frontTitleWhite, frontTitleYellow}) {
  return (
    <div className='relative text-white text-center mt-24 h-4'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-extrabold pt-2'>
          <span>{frontTitleWhite}</span>
          <span className='text-yellow-500 pl-4'>{frontTitleYellow}</span>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5 font-extrabold'>
          {backTitle}
        </div>
    </div>
  )
}

export default Header
