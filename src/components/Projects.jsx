import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful landing page using Spline + React with smooth interactions and responsive design.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Collaboration Tool',
    description:
      'A collaborative canvas with presence, comments, and keyboard-driven UX.',
    tags: ['Next.js', 'WebSockets', 'Prisma'],
    link: '#',
  },
  {
    title: 'Design System Starter',
    description:
      'A component library with tokens, docs, and accessibility baked-in from day one.',
    tags: ['Storybook', 'Radix', 'TypeScript'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-purple-500/20 p-2 text-purple-300"><Folder size={18} /></div>
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-purple-500/10 blur-2xl" />

              <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="mb-4 text-sm text-white/70">{p.description}</p>

              <div className="mb-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
              >
                View project
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
