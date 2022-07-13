import SkillsUIContainer from './components/skills-ui/skills-ui-container/SkillsUIContainer';
import { Hero } from "./components/hero/Hero";
import { NextSteps } from "./components/next-steps/NextSteps";

function App() {
  return (
    <div className="App">
      <Hero />
      <SkillsUIContainer />
      <NextSteps />
    </div>
  );
}

export default App;
