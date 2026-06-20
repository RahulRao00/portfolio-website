'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

interface VideoShowcaseProps {
  videos: Array<{
    id: string
    title: string
    description: string
    thumbnail: string
    videoUrl?: string
  }>
}

export function VideoShowcase({ videos }: VideoShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [playingId, setPlayingId] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({})

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (id === hoveredId && video) {
        video.play().catch(() => {})
      } else if (video) {
        video.pause()
      }
    })
  }, [hoveredId])

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {videos.map((video) => (
        <motion.div
          key={video.id}
          variants={itemVariants}
          className="group relative cursor-pointer overflow-hidden rounded-xl"
          onMouseEnter={() => setHoveredId(video.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Video Container */}
          <motion.div
            className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-blue-400/10"
            whileHover={{ borderColor: 'rgba(100, 181, 246, 0.3)' }}
          >
            {/* Thumbnail or Video */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Video element (hidden, used for autoplay) */}
            {video.videoUrl && (
              <video
                ref={(el) => {
                  if (el) videoRefs.current[video.id] = el
                }}
                src={video.videoUrl}
                muted={isMuted}
                loop
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/0 flex items-center justify-center"
              animate={{
                backgroundColor: hoveredId === video.id ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Play Button */}
              <motion.button
                animate={{
                  scale: hoveredId === video.id ? 1 : 0.8,
                  opacity: hoveredId === video.id ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors"
                onClick={() => setPlayingId(playingId === video.id ? null : video.id)}
              >
                {playingId === video.id ? (
                  <Pause size={28} fill="white" />
                ) : (
                  <Play size={28} fill="white" className="ml-1" />
                )}
              </motion.button>
            </motion.div>

            {/* Controls Overlay */}
            {hoveredId === video.id && (
              <motion.div
                className="absolute bottom-4 right-4 flex gap-2 z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full bg-blue-500/80 text-white flex items-center justify-center hover:bg-blue-600 transition-all"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-lg font-heading font-bold text-white">{video.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{video.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
