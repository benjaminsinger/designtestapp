import { SkillsCard } from "../../skills-card/SkillsCard";
import SkillsUIHeader from "../skills-ui-header/SkillsUIHeader";
import SkillsUISubnav from "../skills-ui-subnav/SkillsUISubnav";

const SkillsUIContainer = () => {
  return (
    <div className="text-white mx-auto bg-brand-primary max-w-screen rounded-t-xl overflow-hidden">
      <SkillsUIHeader />
      <SkillsUISubnav />
      <SkillsCard />
    </div>
  );
};

export default SkillsUIContainer;
