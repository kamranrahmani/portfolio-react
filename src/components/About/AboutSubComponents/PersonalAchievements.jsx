import React from 'react'
import AchievementItem from './AchievementItem'

function PersonalAchievements() {
  return (
    <div className='grid grid-cols-2 gap-8 text-white'>
      <AchievementItem achQuant={5} achTitle={'YEARS OF EXPERIENCE'}/>
      <AchievementItem achQuant={30} achTitle={'COMPLETED PROJECTS'}/>
      <AchievementItem achQuant={47} achTitle={'HAPPY CUSTOMERS'}/>
      <AchievementItem achQuant={3} achTitle={'AWARDS WON'}/>
    </div>
  )
}

export default PersonalAchievements
