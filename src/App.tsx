import "./App.css";
import Navbar from "./components/organisms/Navbar";
import Hero from "./components/organisms/Hero";
import About from "./components/organisms/About";
import Skills from "./components/organisms/Skills";
import Projects from "./components/organisms/Projects";
import Contact from "./components/organisms/Contact";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
