import React from 'react'
import SkillsUIHeaderTabItem from './SkillsUIHeaderTabItem'

const SkillsUIHeaderTabList = ({ tabs }) => {
  return (
    <div>
      HEADER TAB LIST
      {tabs && tabs.map(tab => <SkillsUIHeaderTabItem />)}
    </div>
  )
}

export default SkillsUIHeaderTabList