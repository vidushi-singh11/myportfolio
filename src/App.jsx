import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';
import CursorGlow from './components/CursorGlow';
import GradientBackground from './components/GradientBackground';

function App() {
  return (
    <>
      {/* Interactive background layers */}
      <GradientBackground />
      <ParticleField />
      <CursorGlow />

      <Navbar />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
