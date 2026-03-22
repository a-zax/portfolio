import Navbar from '@/components/Navbar';
import ScrollyCanvas from '@/components/ScrollyCanvas';
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

      {/* ─── SCROLLYTELLING ZONE ─── */}
      {/* Position relative so Overlay can be positioned inside it */}
      <div className="relative" id="hero">
        <ScrollyCanvas />
        {/* Overlay is absolutely positioned inside this wrapper */}
        <div className="absolute inset-0 top-0 pointer-events-none z-10" style={{ height: '500vh' }}>
          <Overlay />
        </div>
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
