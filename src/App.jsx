import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tech from "./components/Tech";

export const App = () => {
  return (
    <div className="app">
      <section id="home">
        <Home />
      </section>
      <section id="tech">
        <Tech />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};
