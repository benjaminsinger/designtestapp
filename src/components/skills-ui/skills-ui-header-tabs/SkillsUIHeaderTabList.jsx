import React from 'react'
import SkillsUIHeaderTabItem from './SkillsUIHeaderTabItem'

const SkillsUIHeaderTabList = ({ tabs }) => {
  return (
    <div className=''>
      {console.log(tabs)}
      HEADER TAB LIST
      {tabs && tabs.map(tab => <SkillsUIHeaderTabItem name={tab} />)}
    </div>
  )
}

export default SkillsUIHeaderTabList