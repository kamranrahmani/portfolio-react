import React from 'react'
import PersonalAchievements from './PersonalAchievements'
import PersonalDetails from './PersonalDetails'


function PersonalInfo() {
  return (
    <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between items-start w-[80%] mt-32 mx-auto'>
        <PersonalDetails /> 
        <PersonalAchievements />       
    </div>
  )
}

export default PersonalInfo
