import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code2, Smartphone, Brain, Zap } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const duration = 2000;
    const increment = num / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref} className="counter-value">{typeof count === 'number' ? count : target}{suffix}</span>;
}

const highlights = [
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile Expert',
    desc: 'Cross-platform React Native apps with HealthKit, Google Fit, biometrics & push notifications',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  {
    icon: <Code2 size={24} />,
    title: 'Full-Stack',
    desc: 'React.js, Node.js, Express, MongoDB, Firebase - end-to-end application delivery',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
  },
  {
    icon: <Brain size={24} />,
    title: 'AI & Automation',
    desc: 'n8n workflows, OpenAI integration, RAG pipelines, Dialogflow CX chatbots',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
  },
  {
    icon: <Zap size={24} />,
    title: 'Performance',
    desc: '40% app boost, <100ms queries, 35% faster launches through profiling & optimization',
    gradient: 'from-green-500 to-emerald-500',
    glow: 'group-hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 px-6 relative" ref={ref}>
      <div className="section-divider max-w-6xl mx-auto mb-28" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Software Engineer at Nirmitee.io with a passion for building high-impact
            mobile and web applications that solve real problems at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group gradient-border card-glow p-6 rounded-2xl bg-bg-card ${item.glow}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 text-white shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {[
            { value: 30, suffix: 'K+', label: 'Users Served', color: 'text-blue-400' },
            { value: 6, suffix: '+', label: 'Production Apps', color: 'text-cyan-400' },
            { value: 3, suffix: '', label: 'Years Experience', color: 'text-purple-400' },
            { value: 95, suffix: '%', label: 'On-Time Delivery', color: 'text-green-400' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-7 rounded-2xl bg-bg-card border border-white/[0.04] gradient-border">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
