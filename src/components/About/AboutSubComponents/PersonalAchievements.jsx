
import AchievementItem from './AchievementItem'

function PersonalAchievements() {
  return (
    <div className='grid grid-cols-2 gap-8 text-white'>
      <AchievementItem achQuant={3} achTitle={'YEARS OF EXPERIENCE'}/>
      <AchievementItem achQuant={4} achTitle={'COMPLETED PROJECTS'}/>
      <AchievementItem achQuant={5} achTitle={'HAPPY CUSTOMERS'}/>
      <AchievementItem achQuant={0} achTitle={'AWARDS WON'} showPlus={false}/>
    </div>
  )
}

export default PersonalAchievements
