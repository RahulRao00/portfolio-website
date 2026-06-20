'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Share2, Heart, Send } from 'lucide-react'

export default function ContactSection() {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/+918826046220',
      color: 'hover:text-green-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:gauravbhai8894@gmail.com',
      color: 'hover:text-blue-400',
    },
    {
      icon: Share2,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-500',
    },
    {
      icon: Heart,
      label: 'Instagram',
      href: 'https://instagram.com/gauravcuts',
      color: 'hover:text-pink-400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-background via-slate-950 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-space-grotesk text-blue-400 text-sm font-semibold tracking-widest">GET IN TOUCH</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-400 text-lg font-dm-sans">
            Ready to bring your vision to life? Get in touch and let&apos;s create something amazing.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16"
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="glass-dark p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer border border-blue-400/10 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 15 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                className={`mb-3 text-gray-400 group-hover:text-white transition-colors ${method.color}`}
              >
                <method.icon size={32} />
              </motion.div>
              <span className="text-white font-semibold text-sm font-space-grotesk">{method.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-dark p-12 rounded-2xl text-center border border-blue-400/10 hover:border-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
        >
          <h3 className="text-3xl font-heading font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto text-pretty font-dm-sans">
            Whether you need a quick edit or a full-scale production, I&apos;m here to help. Let&apos;s discuss your project and create something exceptional.
          </p>
          <motion.a
            href="mailto:gauravbhai8894@gmail.com"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-primary"
          >
            Send Me an Email
          </motion.a>
        </motion.div>

        {/* Response Time */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.div
            className="inline-block glass-dark px-6 py-3 rounded-full border border-blue-400/20"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-gray-400 text-sm font-dm-sans">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mr-2"
              >
                ●
              </motion.span>
              I typically respond to inquiries within <span className="text-white font-semibold">24 hours</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
