'use client'

import { motion } from 'framer-motion'

export default function SkillsSection() {
  const skills = [
    { category: 'Editing Software', items: ['After Effects','Premiere Pro','Filmora', 'CapCut PC'] },
    { category: 'Motion Graphics', items: ['After Effects',] },
    { category: 'Design Tools', items: ['Photoshop', 'Illustrator', 'Canva'] },
    { category: 'Audio', items: ['Audition',] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="relative py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-space-grotesk text-blue-400 text-sm font-semibold tracking-widest">EXPERTISE</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-dm-sans">
            Proficient in industry-standard tools and platforms used by top creative professionals.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-dark p-8 rounded-2xl border border-blue-400/10 hover:border-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <motion.h3
                className="text-xl font-heading font-bold text-white mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                {skillGroup.category}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.15, y: -2 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/30 to-blue-400/20 text-blue-300 rounded-lg text-sm font-medium cursor-default transition-all border border-blue-400/30 hover:border-blue-300/60 font-space-grotesk"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass-dark p-8 rounded-xl"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-6">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Cinematic Color Grading',
              'Dynamic Transitions',
              'Motion Graphics Design',
              'Audio Cleanup & Noise Reduction',
              'Visual Effects (VFX)',
              'Video Performance Optimization',
              'Multi-Camera Editing',
              'Narrative Storytelling',
            ].map((expertise, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-slate-900/50 rounded-lg border border-slate-800"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-gray-300">{expertise}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
