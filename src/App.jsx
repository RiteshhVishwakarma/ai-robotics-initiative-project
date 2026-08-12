import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Domains from './components/sections/Domains';
import Benefits from './components/sections/Benefits';
import Projects from './components/sections/Projects';
import Team from './components/sections/Team';
import Mentors from './components/sections/Mentors';
import Research from './components/sections/Research';
import Vision from './components/sections/Vision';
import Join from './components/sections/Join';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Research />
        <About />
        <Domains />
        <Projects />
        <Benefits />
        <Team />
        <Mentors />
        <Vision />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

export default App;
