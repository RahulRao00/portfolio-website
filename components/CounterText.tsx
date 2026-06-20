'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CounterTextProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

export const CounterText = ({
  target,
  suffix = '',
  duration = 2,
  className = '',
}: CounterTextProps) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const increment = target / (duration * 60)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {count}
      {suffix}
    </motion.div>
  )
}
