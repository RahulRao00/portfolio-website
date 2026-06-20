'use client'

import React, { useRef, ReactNode, memo } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface ParallaxHoverProps {
  children: ReactNode
  className?: string
  intensity?: number
}

function ParallaxHoverInner({ children, className = '', intensity = 20 }: ParallaxHoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateXRaw = useMotionValue(0)
  const rotateYRaw = useMotionValue(0)
  const rotateX = useSpring(rotateXRaw, { stiffness: 260, damping: 28, mass: 0.6 })
  const rotateY = useSpring(rotateYRaw, { stiffness: 260, damping: 28, mass: 0.6 })
  const lastRotationRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotationX = ((event.clientY - centerY) / rect.height) * intensity
    const rotationY = ((event.clientX - centerX) / rect.width) * -intensity

    if (
      Math.abs(rotationX - lastRotationRef.current.x) > 0.5 ||
      Math.abs(rotationY - lastRotationRef.current.y) > 0.5
    ) {
      rotateXRaw.set(rotationX)
      rotateYRaw.set(rotationY)
      lastRotationRef.current = { x: rotationX, y: rotationY }
    }
  }

  const handleMouseLeave = () => {
    rotateXRaw.set(0)
    rotateYRaw.set(0)
    lastRotationRef.current = { x: 0, y: 0 }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1200px',
        willChange: 'transform',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const ParallaxHover = memo(ParallaxHoverInner)
