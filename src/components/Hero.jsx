import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Phone, Download } from 'lucide-react';

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const roles = [
  'React Native Developer',
  'Full-Stack Engineer',
  'Mobile App Architect',
  'AI Automation Builder',
];

function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(roles);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated orbs - bigger and more vivid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-600/[0.07] rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[120px] animate-float-slow" />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-green-500/20 bg-green-500/5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-green-400 font-medium">Available for opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="block text-gray-200"
            >
              Hi, I'm
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block text-gradient mt-2"
            >
              Pankaj Madhikar
            </motion.span>
          </h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-gray-400 mb-6 h-9 font-light"
          >
            <span>{typedText}</span>
            <span className="typing-cursor" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-base md:text-lg text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed"
          >
            3 years building cross-platform mobile & web apps serving{' '}
            <span className="text-gray-300 font-medium">30,000+ users</span>.
            Specialized in performance optimization, complex integrations, and AI automation.
          </motion.p>

          {/* Metric pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {[
              { label: '6+ Apps', color: 'blue' },
              { label: '40% Perf Boost', color: 'cyan' },
              { label: '0.3% Crash Rate', color: 'green' },
            ].map((pill) => (
              <span
                key={pill.label}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border
                  ${pill.color === 'blue' ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : ''}
                  ${pill.color === 'cyan' ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : ''}
                  ${pill.color === 'green' ? 'text-green-400 bg-green-500/10 border-green-500/20' : ''}
                `}
              >
                {pill.label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)]"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl border border-gray-700/50 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
            >
              View Work
            </a>
            <a
              href={import.meta.env.BASE_URL + 'Pankaj_Madhikar_Mobile_App_Engineer.pdf'}
              download="Pankaj_Madhikar_Mobile_App_Engineer.pdf"
              className="px-8 py-3.5 rounded-xl border border-purple-500/30 text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex items-center justify-center gap-3"
          >
            {[
              { href: 'https://linkedin.com/in/pankajmadhikar', icon: <LinkedinIcon size={18} />, hoverColor: 'hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]' },
              { href: 'mailto:pankajmadhikar308@gmail.com', icon: <Mail size={18} />, hoverColor: 'hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]' },
              { href: 'tel:+917397839266', icon: <Phone size={18} />, hoverColor: 'hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-500 transition-all duration-300 ${social.hoverColor}`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 rounded-full bg-gray-500"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
