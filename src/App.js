import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";
import { Element } from "react-scroll";

function App() {
  return (
    <>
    <Navbar />
    <Element name="home"><Hero /></Element>
    <Element name="about"><AboutMe /></Element>
    <Element name="skills"><SkillSection /></Element>
    <Element name="projects"><ProjectSection /></Element>
    <Element name="contact"><ContactMe /></Element>
    </>
  );
}

export default App;
