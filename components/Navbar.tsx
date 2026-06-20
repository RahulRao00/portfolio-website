'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, type MouseEvent } from 'react'
import { MagneticButton } from './MagneticButton'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = ['Portfolio', 'Skills', 'Services', 'About', 'Contact']

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault()
    const section = document.getElementById(targetId)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(event) => scrollToSection(event, 'home')}
          whileHover={{ scale: 1.08 }}
          className="text-2xl font-heading font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent cursor-pointer"
          aria-label="VS Portfolio - Home"
        >
          GK
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(event) => scrollToSection(event, item.toLowerCase())}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-white/80 hover:text-accent transition-colors text-sm font-medium font-space-grotesk relative group"
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <MagneticButton className="hidden md:block btn-primary">
          Hire Me
        </MagneticButton>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/50 backdrop-blur-md border-t border-white/10"
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(event) => scrollToSection(event, item.toLowerCase())}
                className="text-white/80 hover:text-accent transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full">Hire Me</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
