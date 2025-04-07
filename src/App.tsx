
import './App.css'
import {Header} from "./components/Header.tsx";
import {AboutMe} from "./components/Aboutme.tsx";
import {Projects} from "./components/Projects.tsx";
import {Skills} from "./components/Skills.tsx";
import {Contact} from "./components/Contact.tsx";

function App() {


  return (
      <>
          <Header/>
          <AboutMe/>
          <Projects/>
          <Skills/>
          <Contact/>
      </>
  )
}

export default App
