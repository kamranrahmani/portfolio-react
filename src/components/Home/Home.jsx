import React from 'react'
import Menu from '../GlobalComponents/Menu'
import Intro from './HomeSubComponents/Intro'

function Home() {
  return (
    <>
    <div id='home' className='absolute text-white flex justify-start items-center space-x-52 px-4 h-screen w-[90%] overflow-hidden z-10'>
        <div className='h-4/5 w-2/5'>
            <img className='h-full w-full rounded-2xl' src="../../assets/images/slack.jpg" alt="" />
        </div>
        <Intro /> 
        <Menu />
    </div>
    <div id='homecolor' className='absolute top-0 left-0 h-full w-56 bg-yellow-500 z-0 skew-x-[8deg] scale-x-150'></div>
    </>
  )
}

export default Home
