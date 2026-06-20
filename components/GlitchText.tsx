'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface GlitchTextProps {
  children: string
  className?: string
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  const glitchVariants = {
    initial: { textShadow: 'none' },
    hover: {
      textShadow: [
        'none',
        '3px 0px 0px rgba(100, 181, 246, 0.8), -3px 0px 0px rgba(236, 72, 153, 0.8)',
        '-3px 0px 0px rgba(100, 181, 246, 0.8), 3px 0px 0px rgba(236, 72, 153, 0.8)',
        'none',
      ],
      transition: { duration: 0.4, repeat: Infinity, repeatDelay: 2 },
    },
  }

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      <motion.span
        variants={glitchVariants}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        className="inline-block"
      >
        {children}
      </motion.span>
    </motion.div>
  )
}
