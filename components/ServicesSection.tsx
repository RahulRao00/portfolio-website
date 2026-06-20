'use client'

import { motion } from 'framer-motion'
import { Film, Sparkles, Music, Zap } from 'lucide-react'
import { ParallaxHover } from './ParallaxHover'

export default function ServicesSection() {
  const services = [
    {
      icon: Film,
      title: 'Video Editing',
      description: 'Professional editing for commercials, documentaries, and corporate videos with color grading and effects.',
    },
    {
      icon: Sparkles,
      title: 'Motion Graphics',
      description: 'Custom animated graphics, intros, outros, and dynamic title sequences for any media format.',
    },
    {
      icon: Music,
      title: 'Sound Design',
      description: 'Complete audio post-production including mixing, sound effects, and audio mastering.',
    },
    {
      icon: Zap,
      title: 'Social Media Content',
      description: 'Fast-paced, engaging short-form video content optimized for Instagram, TikTok, and YouTube Shorts.',
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="relative py-20 px-6 bg-linear-to-b from-background via-slate-950 to-background">
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
            <span className="font-space-grotesk text-blue-400 text-sm font-semibold tracking-widest">WHAT I DO</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            Services I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-dm-sans">
            Comprehensive video production and motion graphics services tailored to your unique creative vision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, i) => (
            <ParallaxHover key={i} intensity={12}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -16, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-dark p-8 rounded-2xl border border-blue-400/10 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-blue-500/20 h-full"
              >
              <motion.div
                whileHover={{ scale: 1.2, rotateZ: 10 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                className="mb-6 w-16 h-16 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-400/10 flex items-center justify-center"
              >
                <service.icon className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-2xl font-heading font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-pretty font-dm-sans">{service.description}</p>
              
              {/* Animated button */}
              <motion.button
                whileHover={{ x: 5 }}
                className="mt-6 flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-space-grotesk text-sm"
              >
                Learn More →
              </motion.button>
              </motion.div>
            </ParallaxHover>
          ))}
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-4xl font-heading font-bold text-center text-white mb-4">My Process</h3>
          <p className="text-center text-gray-400 mb-12 font-dm-sans">From concept to delivery, here&apos;s how I work</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision and project requirements' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed production and editing timeline' },
              { step: '03', title: 'Creation', desc: 'Executing the edit with meticulous attention to detail' },
              { step: '04', title: 'Delivery', desc: 'Providing polished final deliverables in all formats' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, borderColor: '#0ea5e9' }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl glass-dark border border-blue-400/10 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="text-7xl font-heading font-bold bg-linear-to-br from-blue-500/20 to-blue-400/10 bg-clip-text text-transparent mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold text-white mb-2 font-heading">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed font-dm-sans">{item.desc}</p>
                {i < 3 && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="hidden md:block absolute top-1/2 -right-6 text-blue-400 text-2xl"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
