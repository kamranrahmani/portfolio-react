
import Header from '../GlobalComponents/Header'
import Menu from '../GlobalComponents/Menu'
import PersonalInfo from './AboutSubComponents/PersonalInfo'
import Skills from './AboutSubComponents/Skills'
import EducationExperience from './AboutSubComponents/EducationExperience'
function About() {
  return (
    <div>
        <Header frontTitleWhite={'ABOUT'} frontTitleYellow={'ME'} backTitle={'RESUME'}/>
        <Menu />
        <PersonalInfo />
        <Skills />
        <EducationExperience />
    </div>
  )
}

export default About
