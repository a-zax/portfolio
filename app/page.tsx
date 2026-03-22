import Navbar from '@/components/Navbar';
import Overlay from '@/components/Overlay';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-navy-950 text-white min-h-screen">
      {/* Sticky navigation */}
      <Navbar />

      {/* ─── SCROLL SEQUENCE HERO (3D Background Only) ─── */}
      <div className="relative w-full" style={{ height: '500vh' }} id="hero">
        <Overlay />
      </div>

      {/* ─── CONTENT SECTIONS ─── */}
      <div id="about">
        <About />
      </div>
      <Experience />
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
