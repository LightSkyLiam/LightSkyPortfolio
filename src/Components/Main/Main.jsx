import About from "../About/About";
import Projects from "../projects/Projects";
import Contact from "../Contact/Contact";
function Main({ isMobile }) {
  return (
    <main>
      <About isMobile={isMobile} />
      <Projects isMobile={isMobile} />
      <Contact />
    </main>
  );
}

export default Main;
