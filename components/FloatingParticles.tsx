'use client'

interface Particle {
  id: number
  x: number
  y: number
  duration: number
  delay: number
  size: number
  xDrift: number
}

function pseudoRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453
  return value - Math.floor(value)
}

const PARTICLES: Particle[] = Array.from({ length: 20 }, (_, i) => {
  const base = i + 1

  return {
    id: i,
    x: pseudoRandom(base * 1.1) * 100,
    y: pseudoRandom(base * 2.3) * 100,
    duration: 15 + pseudoRandom(base * 3.7) * 10,
    delay: pseudoRandom(base * 4.9) * 5,
    size: 2 + pseudoRandom(base * 5.2) * 4,
    xDrift: pseudoRandom(base * 6.8) * 50 - 25,
  }
})

export function FloatingParticles() {
  return (
    <div className="floating-particles fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {PARTICLES.map((particle) => (
        <span
          key={particle.id}
          className="floating-particle absolute rounded-full bg-blue-400/30"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            ['--x-drift' as string]: `${particle.xDrift}px`,
          }}
        />
      ))}
    </div>
  )
}
