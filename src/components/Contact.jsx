import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const LinkedinIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const contactCards = [
  {
    href: 'mailto:pankajmadhikar308@gmail.com',
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'pankajmadhikar308@gmail.com',
    gradient: 'from-blue-500 to-blue-600',
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]',
  },
  {
    href: 'tel:+917397839266',
    icon: <Phone size={22} />,
    label: 'Phone',
    value: '+91 7397839266',
    gradient: 'from-green-500 to-emerald-600',
    glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.12)]',
  },
  {
    href: 'https://linkedin.com/in/pankajmadhikar',
    icon: <LinkedinIcon size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pankajmadhikar',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]',
    external: true,
  },
  {
    icon: <MapPin size={22} />,
    label: 'Location',
    value: 'India',
    gradient: 'from-purple-500 to-pink-600',
    glow: '',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-28 px-6 relative" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-28" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-5"
        >
          {contactCards.map((card, i) => {
            const Tag = card.href ? 'a' : 'div';
            const linkProps = card.href ? {
              href: card.href,
              ...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
            } : {};

            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Tag
                  {...linkProps}
                  className={`group gradient-border flex items-center gap-4 p-6 rounded-2xl bg-bg-card transition-all duration-300 ${card.href ? 'card-glow cursor-pointer' : ''} ${card.glow}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{card.label}</p>
                    <p className="text-white font-medium group-hover:text-gradient transition-all">{card.value}</p>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href="mailto:pankajmadhikar308@gmail.com"
            className="group relative inline-flex items-center gap-2.5 px-10 py-4.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <Send size={20} />
              Send Me a Message
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
