type CursorListener = (x: number, y: number, visible: boolean) => void

class CursorStore {
  x = 0
  y = 0
  visible = false

  private listeners = new Set<CursorListener>()
  private rafId: number | null = null
  private pendingX = 0
  private pendingY = 0
  private pendingVisible = false
  private initialized = false

  private init() {
    if (this.initialized || typeof window === 'undefined') return
    this.initialized = true

    window.addEventListener('mousemove', this.handleMouseMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', this.handleMouseLeave)
  }

  private handleMouseMove = (event: MouseEvent) => {
    this.pendingX = event.clientX
    this.pendingY = event.clientY
    this.pendingVisible = true
    this.scheduleUpdate()
  }

  private handleMouseLeave = () => {
    this.pendingVisible = false
    this.scheduleUpdate()
  }

  private scheduleUpdate() {
    if (this.rafId !== null) return

    this.rafId = requestAnimationFrame(() => {
      this.x = this.pendingX
      this.y = this.pendingY
      this.visible = this.pendingVisible
      this.rafId = null

      this.listeners.forEach((listener) => {
        listener(this.x, this.y, this.visible)
      })
    })
  }

  subscribe(listener: CursorListener) {
    this.init()
    this.listeners.add(listener)
    listener(this.x, this.y, this.visible)

    return () => {
      this.listeners.delete(listener)
    }
  }
}

export const cursorStore = new CursorStore()
