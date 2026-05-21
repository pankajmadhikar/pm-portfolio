import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: '{ }',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/20',
    skills: ['JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frameworks',
    icon: '\u2B21',
    color: 'from-cyan-500 to-cyan-600',
    borderColor: 'border-cyan-500/20',
    skills: ['React Native', 'React.js', 'Express.js', 'Redux Toolkit', 'Next.js'],
  },
  {
    title: 'Mobile & Maps',
    icon: '\uD83D\uDCF1',
    color: 'from-green-500 to-green-600',
    borderColor: 'border-green-500/20',
    skills: ['iOS (HealthKit)', 'Android (Google Fit)', 'Google Maps API', 'GeoJSON', 'Haversine'],
  },
  {
    title: 'Backend & Database',
    icon: '\uD83D\uDDC4',
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500/20',
    skills: ['MongoDB', 'Firebase', 'REST APIs', 'Geospatial Queries', 'Cloud Functions'],
  },
  {
    title: 'Tools & DevOps',
    icon: '\u2699',
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-500/20',
    skills: ['Git', 'Postman', 'Jira', 'Sentry', 'Xcode', 'Android Studio'],
  },
  {
    title: 'AI & Integrations',
    icon: '\uD83E\uDD16',
    color: 'from-pink-500 to-pink-600',
    borderColor: 'border-pink-500/20',
    skills: ['n8n', 'OpenAI', 'RAG', 'Dialogflow CX', 'Razorpay', 'OAuth 2.0'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-28 px-6 relative mesh-gradient" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-28" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">What I Use</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="gradient-border card-glow p-6 rounded-2xl bg-bg-card"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {cat.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wide">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-tag px-3.5 py-2 text-sm rounded-xl bg-white/[0.04] text-gray-300 border ${cat.borderColor} hover:bg-white/[0.08] hover:text-white transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
