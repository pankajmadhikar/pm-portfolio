import { Mail } from 'lucide-react';

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-gradient">PM</span>
          <span className="text-sm text-gray-600">|</span>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Pankaj Madhikar
          </p>
        </div>
        <p className="text-xs text-gray-700">Built with React, Tailwind CSS & Framer Motion</p>
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/in/pankajmadhikar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-500 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href="mailto:pankajmadhikar308@gmail.com"
            className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-500 hover:text-white hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
