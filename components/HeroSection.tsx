'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MagneticButton } from './MagneticButton'
import { ParallaxSection } from './ParallaxSection'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-linear-to-b from-blue-900/20 via-black to-black"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />
      {/* Floating orbs */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-48 top-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [50, 0, 50], x: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <ParallaxSection className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            {/* Badge with shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="glass-dark px-4 py-2 rounded-full shimmer">
                <span className="text-sm text-blue-300 font-space-grotesk">✨ Premium Video Editor</span>
              </div>
            </motion.div>

            {/* Main Title - Smaller size */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight text-balance"
            >
              <motion.span
                className="gradient-text inline-block"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Crafting Visual
              </motion.span>
              <br />
              <motion.span
                className="text-white inline-block"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Stories That Convert
              </motion.span>
            </motion.h1>

            {/* Subtitle - Smaller text */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed text-pretty font-dm-sans"
            >
              Professional video editing, motion graphics, and color grading. I transform raw ideas into cinematic masterpieces.
            </motion.p>

            {/* CTA Buttons with magnetic effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Get in Touch
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden glass-dark border border-blue-400/30 shadow-2xl shadow-blue-500/20">
              <img
                src="/video-editor-hero.png"
                alt="Video editor at work"
                className="w-full h-full object-cover"
              />
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />
              
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-6 glass-dark px-4 py-3 rounded-lg border border-blue-400/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-sm font-space-grotesk text-blue-300">1 Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-2 font-space-grotesk">Scroll to explore</span>
            <div className="w-0.5 h-8 bg-linear-to-b from-blue-400 via-blue-300 to-transparent glow" />
          </motion.div>
        </motion.div>
      </ParallaxSection>
    </section>
  )
}
