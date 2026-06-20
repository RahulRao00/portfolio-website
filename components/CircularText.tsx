'use client'

import { useEffect, useRef, useState } from 'react'

interface CircularTextProps {
  text: string
  radius?: number
  fontSize?: number
}

export const CircularText = ({ text, radius = 60, fontSize = 14 }: CircularTextProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(scrollPercent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = radius * 2.5
    canvas.height = radius * 2.5

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw circular ring
    ctx.strokeStyle = 'rgba(100, 181, 246, 0.3)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.stroke()

    // Draw rotating text around circle
    ctx.font = `bold ${fontSize}px 'Space Grotesk', sans-serif`
    ctx.fillStyle = 'rgba(100, 181, 246, 0.9)'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    const textLength = text.length
    const rotation = scrollProgress * Math.PI * 2

    // Draw each character around the circle
    text.split('').forEach((char, index) => {
      const angle = (index / textLength) * Math.PI * 2 + rotation
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(angle + Math.PI / 2)
      ctx.fillText(char, 0, 0)
      ctx.restore()
    })

    // Draw center dot
    ctx.fillStyle = 'rgba(100, 181, 246, 0.8)'
    ctx.beginPath()
    ctx.arc(centerX, centerY, 4, 0, Math.PI * 2)
    ctx.fill()
  }, [scrollProgress, text, radius, fontSize])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  )
}
