import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const achievements = [
  'Architected 6+ cross-platform apps serving 30,000+ users with 0.3% crash rate',
  'Boosted app performance 40% via Redux optimization; reduced launch time 35%, query latency <100ms',
  'Built reusable component library (25+ components) saving 15 hours/sprint across multiple apps',
  'Integrated HealthKit & Google Fit enabling real-time activity tracking for 50,000+ daily users',
  'Automated 20+ workflows using n8n + OpenAI, eliminating 15 hours/week manual work (50K savings)',
  'Integrated Razorpay (1L+ processed), WhatsApp deep linking (3K+ conversations), AI chatbots (5K+ chats)',
  'Implemented OAuth 2.0, Google Authenticator & biometric auth reducing signup friction 40%',
  'Achieved 95% on-time delivery through Agile collaboration, code reviews & sprint planning',
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-28 px-6" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-28" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building impactful software at scale
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glowing timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px">
            <div className="h-full w-full bg-gradient-to-b from-blue-500 via-cyan-500 via-purple-500 to-transparent" />
            <div className="absolute inset-0 w-full bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent blur-sm opacity-50" />
          </div>

          <div className="pl-16 md:pl-24 relative">
            {/* Animated timeline dot */}
            <div className="absolute left-6 md:left-8 top-8 -translate-x-1/2">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-bg-dark" />
              </span>
            </div>

            <div className="gradient-border p-6 md:p-8 rounded-2xl bg-bg-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                      <Briefcase size={18} />
                    </div>
                    Software Engineer (SDE-1)
                  </h3>
                  <p className="text-primary font-medium mt-2 ml-[52px]">Nirmitee.io</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mt-3 md:mt-0 ml-[52px] md:ml-0 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  <Calendar size={14} />
                  September 2023 - Present
                </div>
              </div>

              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed group"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shrink-0 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-shadow" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 pl-16 md:pl-24 relative"
          >
            <div className="absolute left-6 md:left-8 top-6 -translate-x-1/2">
              <span className="relative flex h-4 w-4">
                <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500 border-2 border-bg-dark" />
              </span>
            </div>
            <div className="gradient-border p-6 rounded-2xl bg-bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">B.Sc. Computer Science</h3>
                  <p className="text-sm text-gray-400">Vivekanand College, Sambhaji Nagar, India</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 ml-[52px]">2019 - 2023</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
