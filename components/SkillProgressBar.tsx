'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface SkillProgressBarProps {
  name: string
  percentage: number
  category: string
}

export function SkillProgressBar({ name, percentage, category }: SkillProgressBarProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-space-grotesk text-sm font-semibold text-white">{name}</span>
        <motion.span
          className="text-xs font-semibold text-blue-400"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
        >
          {percentage}%
        </motion.span>
      </div>

      <div className="relative h-2 bg-gray-700/40 rounded-full overflow-hidden border border-blue-400/20">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            boxShadow: isHovered ? '0 0 20px rgba(100, 181, 246, 0.8)' : '0 0 10px rgba(100, 181, 246, 0.4)',
          }}
        />
      </div>

      {isHovered && (
        <motion.p
          className="text-xs text-gray-400 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {category}
        </motion.p>
      )}
    </motion.div>
  )
}
