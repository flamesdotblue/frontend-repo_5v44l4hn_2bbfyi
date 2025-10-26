import React from 'react';
import { Code, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-cyan-500/20 p-2 text-cyan-300"><User size={18} /></div>
          <h2 className="text-2xl font-semibold">About Me</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 leading-relaxed text-white/80">
            I’m a frontend-focused developer with a passion for creating interactive, accessible interfaces. I love working with modern stacks, crafting smooth animations, and turning complex ideas into simple, enjoyable products.
            <br /><br />
            When I’m not pushing pixels, I’m exploring design systems, refining developer experience, and learning new ways to ship faster without compromising quality.
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              'React',
              'TypeScript',
              'Next.js',
              'Tailwind CSS',
              'Framer Motion',
              'Node.js',
              'FastAPI',
              'MongoDB',
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
              >
                <Code size={16} className="text-cyan-300" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
