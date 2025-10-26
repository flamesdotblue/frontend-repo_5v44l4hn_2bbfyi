import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-slate-950 text-white">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Your Name</span>
            <span className="ml-2 text-white/50">— Portfolio</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name. Built with love, React, and a sprinkle of 3D.
      </footer>
    </div>
  );
}

export default App;
