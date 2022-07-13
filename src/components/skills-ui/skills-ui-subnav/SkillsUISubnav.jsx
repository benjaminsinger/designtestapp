import React from 'react'

const SkillsUISubnav = () => {
  return (
    <>
      <div className="min-w-full flex gap-4 px-0">
        <button className='px-6 py-3 rounded-md bg-brand-primary hover:bg-brand-tertiary focus:bg-brand-tertiary font-bold outline outline-1 transition-all focus:outline-2 focus:outline-offset-4 outline-white'>Social intelligence</button>
        <button className='px-6 py-3 rounded-md bg-brand-primary hover:bg-brand-tertiary focus:bg-brand-tertiary font-bold outline outline-1 transition-all focus:outline-2 focus:outline-offset-4 outline-white'>Innovation</button>
        <button className='px-6 py-3 rounded-md bg-brand-primary hover:bg-brand-tertiary focus:bg-brand-tertiary font-bold outline outline-1 transition-all focus:outline-2 focus:outline-offset-4 outline-white'>Self management</button>
      </div>
    </>
  )
}

export default SkillsUISubnav