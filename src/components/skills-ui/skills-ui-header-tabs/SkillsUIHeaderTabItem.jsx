import React from 'react'

const SkillsUIHeaderTabItem = ({name}) => {
  return (
    <button className='px-8 py-4 font-bold text-md relative bg-brand-secondary hover:bg-brand-primary hover:underline focus:bg-brand-primary rounded-t-xl transition-colors before:-left-2 before:bottom-0 before:absolute before:bg-brand-alt before:h-3 before:w-3 after:-right-2 after:bottom-0 after:absolute after:bg-brand-alt after:h-3 after:w-3 hover:before:bg-brand-primary before:transition-colors hover:after:bg-brand-primary' role="tab">
      {name}
    </button>
  )
}

export default SkillsUIHeaderTabItem