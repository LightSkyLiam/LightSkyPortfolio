import "./App.module.css";
import Hero from "./Hero/Hero";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./footer/Footer";
import { useMobileCheck } from "./hooks/useMobileCheck";

function App() {
  const { isMobile } = useMobileCheck();

  return (
    <>
      <Nav isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <Main isMobile={isMobile} />
      <Footer />
    </>
  );
}

export default App;
