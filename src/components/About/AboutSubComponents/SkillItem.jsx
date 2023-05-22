import React from 'react'
import CircularProgressBar from './CircularProgressBar'


function SkillItem({name, percent}) {
  return (
    <div className='flex flex-col space-y-6 text-white items-center'>
      <CircularProgressBar strokeWidth={10} radius={70} percentage={percent}/>
      <p className='text-xl'>{name}</p>
    </div>
  )
}

export default SkillItem
