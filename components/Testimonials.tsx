'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      title: 'Marketing Director, Tech Startup',
      content: 'Working with this editor transformed our brand videos completely. The attention to detail and creative approach exceeded our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      title: 'Producer, Digital Agency',
      content: 'Professional, reliable, and incredibly talented. Delivered a complex project on time with stunning results. This is someone you want on your team.',
      rating: 5,
    },
    {
      name: 'Emma Chen',
      title: 'Content Creator',
      content: 'The video content created for my channel boosted engagement by 300%. The motion graphics and editing style perfectly matched my brand vision.',
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative py-20 px-6 bg-background">
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
            <span className="font-space-grotesk text-blue-400 text-sm font-semibold tracking-widest">SOCIAL PROOF</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-dm-sans">
            Hear from satisfied clients who&apos;ve collaborated with me on their video projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-dark p-8 rounded-2xl flex flex-col border border-blue-400/10 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 relative overflow-hidden group"
            >
              {/* Animated glow background */}
              <motion.div
                className="absolute -inset-96 bg-gradient-to-r from-blue-500/10 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Star size={18} className="fill-blue-400 text-blue-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 flex-grow text-pretty italic font-dm-sans">&ldquo;{testimonial.content}&rdquo;</p>

                {/* Author */}
                <div>
                  <h4 className="text-white font-semibold font-heading">{testimonial.name}</h4>
                  <p className="text-blue-300 text-sm font-space-grotesk">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
