import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-emerald-500/20 p-2 text-emerald-300"><Mail size={18} /></div>
          <h2 className="text-2xl font-semibold">Let’s Work Together</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 md:col-span-2">
            <p className="mb-4">
              Have a project in mind or just want to say hi? I’m open to freelance, collaborations, and full-time roles.
            </p>
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 font-medium text-slate-900 transition hover:bg-emerald-300"
            >
              <Mail size={18} />
              you@example.com
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-2"><Github size={18} /> GitHub</span>
              <span>→</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:bg-white/10"
            >
              <span className="inline-flex items-center gap-2"><Linkedin size={18} /> LinkedIn</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
