'use client'

import { useEffect, useRef } from 'react'
import { cursorStore } from '@/lib/cursor-store'

const CURSOR_TRANSFORM = (x: number, y: number) =>
  `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`

export const CursorTracker = () => {
  const glowRef = useRef<HTMLDivElement>(null)
  const mediumRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const layers = [
      { ref: glowRef, visibleOpacity: '0.15' },
      { ref: mediumRef, visibleOpacity: '0.25' },
      { ref: outerRef, visibleOpacity: '1' },
      { ref: innerRef, visibleOpacity: '1' },
    ]

    return cursorStore.subscribe((x, y, visible) => {
      const transform = CURSOR_TRANSFORM(x, y)
      const opacity = visible ? undefined : '0'

      for (const layer of layers) {
        const element = layer.ref.current
        if (!element) continue

        element.style.transform = transform
        element.style.opacity = opacity ?? layer.visibleOpacity
      }
    })
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block" aria-hidden>
      <div
        ref={glowRef}
        className="cursor-layer fixed left-0 top-0 h-24 w-24 rounded-full opacity-0"
        style={{
          background:
            'radial-gradient(circle, rgba(100, 181, 246, 0.35) 0%, rgba(167, 139, 250, 0.2) 45%, transparent 70%)',
        }}
      />
      <div
        ref={mediumRef}
        className="cursor-layer fixed left-0 top-0 h-16 w-16 rounded-full opacity-0"
        style={{
          background:
            'radial-gradient(circle, rgba(100, 181, 246, 0.45) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 72%)',
        }}
      />
      <div
        ref={outerRef}
        className="cursor-layer fixed left-0 top-0 h-10 w-10 rounded-full border-2 border-blue-400/40 opacity-0"
      />
      <div
        ref={innerRef}
        className="cursor-layer fixed left-0 top-0 h-3 w-3 rounded-full bg-blue-300 opacity-0"
        style={{
          boxShadow:
            '0 0 20px rgba(100, 181, 246, 1), 0 0 40px rgba(167, 139, 250, 0.6)',
        }}
      />
    </div>
  )
}
