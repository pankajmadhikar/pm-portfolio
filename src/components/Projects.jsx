import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Heart, Map, FileText, Fish, Activity, HandHeart, Bot, Monitor, Trophy,
  ChevronDown, ChevronUp, Sparkles
} from 'lucide-react';

const projects = [
  {
    title: 'Gridbase',
    subtitle: 'Interactive Contractor & Jurisdictional Mapping',
    period: 'Nov 2025 - Present',
    icon: <Map size={22} />,
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'blue',
    tags: ['React', 'TypeScript', 'Google Maps API', 'GeoJSON'],
    highlights: [
      '500+ contractor yards mapped with real-time filtering',
      'Haversine formula for radius-based reachability visualization',
      'Turn-by-turn routing with multi-stop optimization (60% faster)',
      'US county-level IBEW union coverage with 3,000+ GeoJSON polygons',
    ],
  },
  {
    title: '9Je',
    subtitle: 'AI-Powered Automation Platform',
    period: 'Nov 2025 - Present',
    icon: <Bot size={22} />,
    color: 'from-purple-500 to-pink-600',
    accentColor: 'purple',
    tags: ['n8n', 'OpenAI', 'RAG', 'Vector Search'],
    highlights: [
      '25+ automated business tasks saving 120 hours monthly',
      '93% improvement in document query time (30s to 2s)',
      '50,000+ messages/month across email, SMS, Slack (99.8% delivery)',
    ],
  },
  {
    title: 'AutoChart',
    subtitle: 'AI-Powered Nurse Assessment & Patient Charting',
    period: 'Mar 2025 - Nov 2025',
    icon: <FileText size={22} />,
    color: 'from-green-500 to-emerald-600',
    accentColor: 'green',
    tags: ['React Native', 'Speech-to-Text', '2FA', 'Firebase'],
    highlights: [
      'AI audio assessment reducing documentation time 50%',
      'Google Authenticator 2FA for 500+ healthcare professionals',
      '2,000+ audio assessments/month with 95% transcription accuracy',
    ],
  },
  {
    title: 'Mconsole',
    subtitle: 'Healthcare Media Collaboration Platform',
    period: 'Jun 2025 - Jan 2026',
    icon: <Monitor size={22} />,
    color: 'from-teal-500 to-cyan-600',
    accentColor: 'cyan',
    tags: ['React', 'RBAC', 'Calendar', 'HIPAA'],
    highlights: [
      'Advanced calendar system (drag-drop, conflict detection) for 500+ appointments',
      'Role-based access control for 4 user types with granular permissions',
      'Media sharing with auto compression reducing storage costs 40%',
    ],
  },
  {
    title: 'StoryMD',
    subtitle: 'Healthcare Data Integration Platform',
    period: 'May 2025 - Jul 2025',
    icon: <Activity size={22} />,
    color: 'from-red-500 to-rose-600',
    accentColor: 'red',
    tags: ['React Native', 'Keycloak', 'Terra API', 'Biometrics'],
    highlights: [
      'Enterprise SSO with Keycloak for 1,000+ provider accounts',
      'Multi-wearable health data (Apple Watch, Fitbit, Garmin)',
      'Real-time metrics dashboard from 5+ data sources, <3s load',
    ],
  },
  {
    title: 'PainPal+',
    subtitle: 'Healthcare & Activity Tracking App',
    period: 'May 2024 - Jan 2025',
    icon: <Heart size={22} />,
    color: 'from-pink-500 to-rose-600',
    accentColor: 'pink',
    tags: ['React Native', 'HealthKit', 'Dialogflow CX', 'OAuth 2.0'],
    highlights: [
      '15,000+ active users with 4.6 rating (2,500+ reviews)',
      'AI chatbot handling 5,000+ monthly conversations (92% satisfaction)',
      'OAuth 2.0 (Google, Facebook, Apple) increasing registration 65%',
    ],
  },
  {
    title: 'Rooser',
    subtitle: 'Real-Time Fish Marketplace',
    period: 'Jan 2025 - Mar 2025',
    icon: <Fish size={22} />,
    color: 'from-sky-500 to-blue-600',
    accentColor: 'sky',
    tags: ['React Native', 'WhatsApp', 'Real-Time', 'Geolocation'],
    highlights: [
      'WhatsApp deep linking driving 3,000+ conversations (45% conversion)',
      '50+ vendors across 3 countries with real-time stock updates',
      'Request expiry logic reducing stale orders 75%',
    ],
  },
  {
    title: 'Gaushala',
    subtitle: 'Donation Management App',
    period: 'Jan 2024 - Mar 2024',
    icon: <HandHeart size={22} />,
    color: 'from-amber-500 to-orange-600',
    accentColor: 'amber',
    tags: ['React Native', 'Razorpay', 'Deep Linking'],
    highlights: [
      'Razorpay payment processing 10L+ with 99.9% success rate',
      'Deep linking via WhatsApp increasing conversion 35%',
    ],
  },
  {
    title: 'GoApi',
    subtitle: 'Sports Discovery Platform',
    period: 'Oct 2023 - Dec 2023',
    icon: <Trophy size={22} />,
    color: 'from-lime-500 to-green-600',
    accentColor: 'lime',
    tags: ['React Native', 'Community', 'Events'],
    highlights: [
      '10,000+ users discovering sports events across 50+ cities',
      'Community features increasing interaction 40% and attendance 25%',
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-28 px-6 relative mesh-gradient" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-28" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of impactful applications I've built and shipped to production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group gradient-border card-glow p-6 rounded-2xl bg-bg-card flex flex-col relative overflow-hidden"
            >
              {/* Hover background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-lg`}>
                    {project.icon}
                  </div>
                  <span className="text-xs text-gray-500 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="skill-tag px-2.5 py-1 text-xs rounded-lg bg-white/[0.04] text-gray-400 border border-white/[0.06] hover:text-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5 mt-auto">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed">
                      <Sparkles size={10} className="mt-1 text-gray-600 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-gray-700/50 text-gray-400 hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" /></>
              ) : (
                <>View All Projects <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
