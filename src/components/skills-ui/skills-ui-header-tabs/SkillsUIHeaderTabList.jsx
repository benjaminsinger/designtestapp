import React from 'react'
import SkillsUIHeaderTabItem from './SkillsUIHeaderTabItem'

const SkillsUIHeaderTabList = ({ tabs }) => {
  return (
    <div className='gap-4 flex flex-wrap'>
      {tabs && tabs.map(tab => <SkillsUIHeaderTabItem name={tab} />)}
    </div>
  )
}

export default SkillsUIHeaderTabList