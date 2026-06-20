'use client'

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'

interface HorizontalScrollProps {
  children: React.ReactNode
  id?: string
}

export function HorizontalScroll({ children, id }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -500])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth < 768)
    }
  })

  return (
    <motion.div
      ref={containerRef}
      id={id}
      className="relative h-[300vh] md:h-[200vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          className="flex gap-6 px-6"
          style={{ x: isSmallScreen ? undefined : x }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  )
}
