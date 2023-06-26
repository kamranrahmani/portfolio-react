import React from 'react'
import Menu from '../GlobalComponents/Menu'
import Intro from './HomeSubComponents/Intro'

function Home() {
  return (
    <>
    <Menu />
    <div id='home' className='absolute text-white flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-52 px-4 mt-32 lg:my-0 h-screen w-[90%] z-10'>
        <div className='h-4/5 w-4/5 lg:w-2/5'>
            <img className='h-full w-full rounded-2xl' src="../../assets/images/slack.jpg" alt="" />
        </div>
        <Intro /> 
    </div>
    <div id='homecolor' className='absolute hidden lg:block top-0 left-0 h-full w-56 bg-yellow-500 z-0 skew-x-[8deg] scale-x-150'></div>
    </>
  )
}

export default Home
