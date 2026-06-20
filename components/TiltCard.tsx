'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef, memo } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

function TiltCardInner({ children, className = '' }: TiltCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const offsetX = e.clientX - rect.left - centerX
    const offsetY = e.clientY - rect.top - centerY

    x.set(offsetX)
    y.set(offsetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className={`transition-shadow duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export const TiltCard = memo(TiltCardInner)
