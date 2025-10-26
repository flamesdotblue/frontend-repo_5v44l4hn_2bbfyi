import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Decorative gradient aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-[40rem] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Text content */}
        <div className="relative z-10 flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for freelance work
          </span>

          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="max-w-xl text-white/70">
            I design and build delightful, performant web experiences. I blend thoughtful UX, modern frontend engineering, and an eye for detail to ship products people love.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 transition hover:bg-cyan-400"
            >
              View Projects
              <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
              aria-label="Email"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">you@example.com</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 transition hover:text-white"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 transition hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Spline scene */}
        <div className="relative h-[360px] w-full md:h-[520px] lg:h-[600px]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Soft gradient overlay that won’t block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
