import { SkillsCard } from "../../skills-card/SkillsCard";
import SkillsUIHeader from "../skills-ui-header/SkillsUIHeader";
import SkillsUISubnav from "../skills-ui-subnav/SkillsUISubnav";

const SkillsUIContainer = () => {
  return (
    <div className='text-white mx-auto bg-brand-primary max-w-screen rounded-t-xl overflow-hidden container my-10'>
      <SkillsUIHeader />
      <div class="px-10 py-5 gap-4 flex flex-wrap">
        <SkillsUISubnav />
        <div class="flex w-full gap-4">
          <div className='w-1/2 bg-brand-alt'></div>
          <div className='w-1/2 bg-brand-alt'><SkillsCard /></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsUIContainer;
