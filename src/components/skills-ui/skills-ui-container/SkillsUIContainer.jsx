import SkillsUIHeader from '../skills-ui-header/SkillsUIHeader';

const SkillsUIContainer = props => {
  return (
    <>
    {console.log(props)}
      <div className='p-4 bg-brand-primary text-white'>
        <SkillsUIHeader />
      </div>
    </>
  )
}

export default SkillsUIContainer;