'use client'

import { motion } from 'framer-motion'
import { Mail, Share2, Heart, Send, ArrowUp, MessageSquare, Smartphone, Globe } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Mail, href: 'mailto:gauravbhai8894@gmail.com', label: 'Email' },
    { icon: Share2, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Heart, href: 'https://www.instagram.com/gauravcuts', label: 'Instagram' },
  ]

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Video Editing', href: '#services' },
        { label: 'Motion Graphics', href: '#services' },
        { label: 'Color Grading', href: '#services' },
        { label: 'Sound Design', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Me', href: '#about' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Experience', href: '#experience' },
        { label: 'Blog', href: '#blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '#' },
        { label: 'Client Testimonials', href: '#testimonials' },
        { label: 'FAQ', href: '#' },
        { label: 'Contact Guide', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Sitemap', href: '#' },
      ],
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-b from-black/0 via-black/30 to-black/80 border-t border-blue-400/10 backdrop-blur-md">
      {/* Floating background element */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Top section - Brand and Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {/* Brand */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-heading font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4"
            >
              GK
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base leading-relaxed mb-6 max-w-sm font-dm-sans"
            >
              Professional video editing, motion graphics, and visual storytelling. Transforming ideas into cinematic masterpieces that connect and inspire.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4 flex-wrap"
            >
              {[
                { icon: Smartphone, label: '24/7 Support' },
                { icon: MessageSquare, label: 'Quick Response' },
                { icon: Globe, label: 'Worldwide' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon size={16} className="text-blue-400" />
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-2xl border border-blue-400/20"
          >
            <h4 className="text-white font-heading font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6 font-dm-sans">Get the latest on video editing tips, industry trends, and new services.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/30 border border-blue-400/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-colors font-dm-sans"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Join
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Links Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {footerSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-white font-heading font-semibold mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: linkIdx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-300 text-sm transition-colors duration-300 font-dm-sans group inline-flex items-center gap-2"
                    >
                      {link.label}
                      <span className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Left - Copyright */}
          <p className="text-gray-400 text-sm font-dm-sans">
            &copy; {currentYear} <span className="font-semibold text-white">Visual Stories</span>. All rights reserved. Crafted with precision.
          </p>

          {/* Center - Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 glass-dark rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-300 border border-blue-400/10 hover:border-blue-400/50 transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Right - Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 glass-dark rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-300 border border-blue-400/10 hover:border-blue-400/50 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
