import React from 'react'
import SkillsUIHeaderTabList from '../skills-ui-header-tabs/SkillsUIHeaderTabList'

const SkillsUIHeader = () => {
  return (
    <div className='bg-brand-tertiary'>
        <h2>Job Skills Report</h2>
        <SkillsUIHeaderTabList tabs={['Meta Skills', 'Green Skills']} />
    </div>
  )
}

export default SkillsUIHeader