import SkillsUIHeader from '../skills-ui-header/SkillsUIHeader';

const SkillsUIContainer = props => {
  return (
    <>
      <div className='text-white mx-auto pb-5 bg-brand-primary max-w-screen-xl rounded-t-xl overflow-hidden'>
        <SkillsUIHeader />
      </div>
    </>
  )
}

export default SkillsUIContainer;