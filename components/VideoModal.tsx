'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  video: {
    id: number
    title: string
    category: string
    videoUrl: string
    description: string
    tools: string[]
  }
  onClose: () => void
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl glass-dark rounded-xl overflow-hidden"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} className="text-white" />
          </motion.button>

          {/* Video Player */}
          <div className="aspect-video bg-black overflow-hidden">
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-heading font-bold text-white mb-2"
            >
              {video.title}
            </motion.h3>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full mb-4"
            >
              {video.category}
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-6 leading-relaxed text-pretty"
            >
              {video.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h4 className="text-white font-semibold mb-3">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {video.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800/80 text-gray-300 text-sm rounded-lg border border-slate-700/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
