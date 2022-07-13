import React from 'react'
import SkillsUIHeaderTabList from '../skills-ui-header-tabs/SkillsUIHeaderTabList'

const SkillsUIHeader = () => {
  return (
    <div className='bg-brand-tertiary px-10 pt-10 pb-0'>
        <h2 className='text-xl font-bold mb-8'>Job Skills Report</h2>
        <SkillsUIHeaderTabList tabs={['Meta skills', 'Green skills']} />
    </div>
  )
}

export default SkillsUIHeader