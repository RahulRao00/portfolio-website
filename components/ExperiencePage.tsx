'use client'

import { motion } from 'framer-motion'
import { useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'
import { ParallaxHover } from './ParallaxHover'

interface ExperienceItem {
  id: number
  title: string
  company: string
  duration: string
  description: string[]
  achievements: string[]
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: 'Video Editor',
    company: 'StarAndDaisy',
    duration: '1 year Experience',
    description: [
      'Motion graphics artists in producing high-quality content for major brands.',
      'Use of advanced color grading techniques and AI-assisted editing workflows to enhance productivity.',
    ],
    achievements: [
      'Increased content output by 40% while maintaining premium quality standards',
    ],
    skills: ['Adobe Premiere Pro', 'After Effects', 'Color Grading', ],
  },
]

function ExperienceCard({
  exp,
  idx,
  scrollYProgress,
}: {
  exp: ExperienceItem
  idx: number
  scrollYProgress: MotionValue<number>
}) {
  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * (idx + 1), -100 * (idx + 1)]
  )

  return (
    <motion.div
      style={{ y: yOffset }}
      initial={{ opacity: 0, x: -50, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
      viewport={{ once: true, margin: '-100px' }}
      className="relative"
    >
      <ParallaxHover intensity={10}>
        <div className="glass-dark p-8 md:p-10 rounded-2xl border border-blue-400/10 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 overflow-hidden group">
          {/* Animated background gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative z-10">
            {/* Timeline indicator */}
            <motion.div
              className="absolute -left-6 top-12 w-4 h-4 bg-blue-400 rounded-full border-4 border-background shadow-lg shadow-blue-400/50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 + 0.2 }}
              viewport={{ once: true }}
            />

            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-blue-300 font-space-grotesk font-semibold">{exp.company}</p>
                </div>
                <motion.span
                  className="text-gray-400 font-space-grotesk text-sm whitespace-nowrap px-4 py-2 bg-blue-400/10 rounded-full border border-blue-400/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {exp.duration}
                </motion.span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 space-y-3">
              {exp.description.map((desc, descIdx) => (
                <motion.p
                  key={descIdx}
                  className="text-gray-300 leading-relaxed font-dm-sans"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {desc}
                </motion.p>
              ))}
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4 font-heading">Key Achievements</h4>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achievementIdx) => (
                  <motion.li
                    key={achievementIdx}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: achievementIdx * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-blue-400 font-bold mt-1">✓</span>
                    <span className="font-dm-sans">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-white font-semibold mb-4 font-heading">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIdx * 0.05 + 0.6 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-linear-to-r from-blue-500/30 to-blue-400/20 text-blue-300 rounded-lg text-sm font-space-grotesk border border-blue-400/30 hover:border-blue-400/60 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ParallaxHover>
    </motion.div>
  )
}

export function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section className="relative py-20 overflow-hidden">
      <div ref={containerRef}>
      {/* Background gradient */}
      <motion.div
        className="absolute -left-40 -bottom-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-space-grotesk text-blue-400 text-sm font-semibold tracking-widest">MY EXPERIENCE</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-dm-sans">
            1+ years of experience creating stunning visual content for brands and creative projects worldwide.
          </p>
        </motion.div>

        {/* Experience Cards - Sliding Effect */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              idx={idx}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Timeline line */}
        <motion.div
          className="absolute left-6 md:left-1/2 top-32 md:top-40 w-1 h-3/4 bg-linear-to-b from-blue-400/30 to-transparent hidden md:block"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>
      </div>
    </section>
  )
}
