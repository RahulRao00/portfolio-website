'use client'

import { motion } from 'framer-motion'
import { ParallaxHover } from './ParallaxHover'
import { CircularText } from './CircularText'
import { StarField } from './StarField'
import { LazyImage } from './LazyImage'

export function AboutMePhoto() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic Star Field Background */}
      <StarField />
      {/* Background gradient blob */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-60 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo - Left Side */}
          <ParallaxHover intensity={15} className="relative h-96 md:h-full min-h-96">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full rounded-2xl overflow-hidden glass-dark border border-blue-400/30 shadow-2xl shadow-blue-500/30"
            >
              <LazyImage
                src="/professional-photo.png"
                alt="Professional profile photo"
                className="w-full h-full"
                priority={false}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating badges */}
              <motion.div
                className="absolute top-6 right-6 glass-dark px-4 py-2 rounded-lg border border-blue-400/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-space-grotesk text-blue-300">Gaurav Kumar</span>
              </motion.div>

              {/* Circular Text Badge */}
              <motion.div
                className="absolute bottom-6 left-6 w-32 h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <CircularText text="VIDEO ARTIST • DESIGNER • " radius={45} fontSize={12} />
              </motion.div>
            </motion.div>
          </ParallaxHover>

          {/* Bio - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="font-space-grotesk text-blue-400 text-sm font-semibold tracking-widest">ABOUT ME</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Transforming <span className="gradient-text">Ideas into</span> <br /> Visual <span className="gradient-text">Masterpieces</span>
            </motion.h2>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg leading-relaxed font-dm-sans">
                I&apos;m a passionate video editor and motion graphics designer with a deep love for cinematic storytelling. My journey in this creative field has been about pushing boundaries and creating content that not only looks stunning but also resonates emotionally with audiences.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed font-dm-sans">
                Every project I undertake is a chance to combine technical excellence with artistic vision. From color grading to complex animations, I approach each frame with meticulous attention to detail.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed font-dm-sans">
                When I&apos;m not creating, you&apos;ll find me exploring new filmmaking techniques, studying cinematic compositions, or collaborating with other creative professionals to bring ambitious visions to life.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-blue-400/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { number: '1+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Done' },
                { number: '10+', label: 'Happy Clients' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400 font-space-grotesk">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
