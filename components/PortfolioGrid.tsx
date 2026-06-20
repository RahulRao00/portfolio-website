'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import VideoModal from './VideoModal'
import { MagneticButton } from './MagneticButton'
import { ParallaxHover } from './ParallaxHover'
import { TiltCard } from './TiltCard'
import videos from '@/data/videos.json'

export default function PortfolioGrid() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Ads', 'Reels', 'YouTube', 'Motion Graphics']
  const filteredVideos = filter === 'All' ? videos : videos.filter(v => v.category === filter)

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
    <section id="portfolio" className="relative min-h-screen py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            <span className="font-space-grotesk text-blue-400 text-sm font-semibold tracking-widest">PORTFOLIO</span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl font-heading font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Featured Work</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto text-pretty font-dm-sans"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            A collection of my latest projects showcasing creativity, technical expertise, and visual storytelling.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all font-space-grotesk ${
                filter === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'glass-dark text-gray-300 hover:text-white hover:border-blue-400/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredVideos.map((video, idx) => (
            <ParallaxHover key={video.id} intensity={8} className="cursor-pointer group h-full">
              <TiltCard className="h-full">
                <motion.div
                  variants={itemVariants}
                  custom={idx}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedVideo(video)}
                  className="cursor-pointer group h-full"
                >
                  <div className="relative overflow-hidden rounded-2xl h-64 bg-slate-900 border border-slate-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Content Overlay */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="w-full">
                    <h3 className="text-white font-heading font-semibold mb-2 text-lg">{video.title}</h3>
                    <span className="inline-block px-3 py-1 bg-blue-500/90 text-white text-xs rounded-full font-space-grotesk font-semibold">
                      {video.category}
                    </span>
                  </div>
                </motion.div>

                {/* Play button indicator */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                  </motion.div>
                </motion.div>
                  </div>
                </motion.div>
              </TiltCard>
            </ParallaxHover>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  )
}
