'use client'

import { useEffect, useState } from 'react'
import { cursorStore } from '@/lib/cursor-store'

export const useCursorPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    return cursorStore.subscribe((x, y) => {
      setPosition({ x, y })
    })
  }, [])

  return position
}
