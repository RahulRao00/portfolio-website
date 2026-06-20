'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    const particleCount = 50
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 1.5 + 0.5,
      color: `rgba(100, 181, 246, ${Math.random() * 0.6 + 0.3})`,
    }))

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const REPEL_DISTANCE = 200
      const REPEL_FORCE = 3
      const COLLISION_DISTANCE = 4

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Repel from cursor
        const distToCursor = Math.hypot(
          particle.x - cursorPos.x,
          particle.y - cursorPos.y
        )

        if (distToCursor < REPEL_DISTANCE) {
          const angle = Math.atan2(
            particle.y - cursorPos.y,
            particle.x - cursorPos.x
          )
          const force = REPEL_FORCE * (1 - distToCursor / REPEL_DISTANCE)
          particle.vx += Math.cos(angle) * force
          particle.vy += Math.sin(angle) * force
        }

        // Collision detection with other particles
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j]
          const distToOther = Math.hypot(
            particle.x - other.x,
            particle.y - other.y
          )

          if (distToOther < COLLISION_DISTANCE) {
            const angle = Math.atan2(other.y - particle.y, other.x - particle.x)
            particle.vx -= Math.cos(angle) * 1
            particle.vy -= Math.sin(angle) * 1
            other.vx += Math.cos(angle) * 1
            other.vy += Math.sin(angle) * 1
          }
        }

        // Apply friction
        particle.vx *= 0.98
        particle.vy *= 0.98

        // Speed limit
        const speed = Math.hypot(particle.vx, particle.vy)
        if (speed > 2) {
          particle.vx = (particle.vx / speed) * 2
          particle.vy = (particle.vy / speed) * 2
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(100, 181, 246, 0.15)'
      ctx.lineWidth = 1
      const CONNECTION_DISTANCE = 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(
            particles[i].x - particles[j].x,
            particles[i].y - particles[j].y
          )
          if (dist < CONNECTION_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [cursorPos])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
