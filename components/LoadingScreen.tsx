'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="fixed inset-0 z-50 bg-gradient-to-b from-black via-slate-900 to-black flex items-center justify-center"
    >
      {/* Background animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400 border-r-blue-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-transparent border-b-blue-400"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-heading font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                VS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Loading text animation */}
        <motion.div className="mb-8">
          <div className="flex gap-1 justify-center mb-6">
            {['C', 'R', 'A', 'F', 'T', 'I', 'N', 'G', ' ', 'V', 'I', 'S', 'I', 'O', 'N', 'S'].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-3xl font-heading font-bold text-white"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Animated loading bar */}
        <motion.div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full"
          />
        </motion.div>

        {/* Dots animation */}
        <div className="flex gap-2 justify-center mt-8">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-400"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ delay: i * 0.2, duration: 1, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
