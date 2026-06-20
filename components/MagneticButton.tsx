'use client'

import { useRef, useEffect, memo } from 'react'
import { cursorStore } from '@/lib/cursor-store'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  strength?: number
}

const MagneticButtonInner = ({
  children,
  href,
  onClick,
  className = '',
  strength = 0.3,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const update = (cursorX: number, cursorY: number) => {
      const element = ref.current
      const content = contentRef.current
      if (!element || !content) return

      const rect = element.getBoundingClientRect()
      const elementCenterX = rect.left + rect.width / 2
      const elementCenterY = rect.top + rect.height / 2
      const deltaX = cursorX - elementCenterX
      const deltaY = cursorY - elementCenterY
      const distance = Math.hypot(deltaX, deltaY)
      const maxDistance = 150

      if (distance < maxDistance) {
        const pull = (1 - distance / maxDistance) * strength * 30
        const angle = Math.atan2(deltaY, deltaX)

        content.style.transform = `translate3d(${Math.cos(angle) * pull}px, ${Math.sin(angle) * pull}px, 0)`
        return
      }

      content.style.transform = 'translate3d(0, 0, 0)'
    }

    return cursorStore.subscribe((x, y, visible) => {
      if (!visible) {
        contentRef.current?.style.setProperty('transform', 'translate3d(0, 0, 0)')
        return
      }

      update(x, y)
    })
  }, [strength])

  const baseClasses = `${className} transition-transform duration-300 ease-out`

  const content = (
    <span ref={contentRef} className="inline-block will-change-transform">
      {children}
    </span>
  )

  if (href) {
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={baseClasses}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  )
}

export const MagneticButton = memo(MagneticButtonInner)
