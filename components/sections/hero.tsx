"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Download, ArrowDown } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    address: string
    linkedin?: string
    registryId?: string
  }
  summary: string
}

export function Hero({ personalInfo, summary }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-purple-100 font-light">
              {personalInfo.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed">
              {summary}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link href={`mailto:${personalInfo.email}`}>
              <Button 
                size="lg" 
                className="glass-effect hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                variant="outline"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
            
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            {personalInfo.linkedin && (
              <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="glass-effect hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                  variant="outline"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </Link>
            )}
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-purple-100/80 text-sm"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              California
            </div>
            {personalInfo.registryId && (
              <div className="flex items-center gap-2">
                <span className="text-xs">{personalInfo.registryId}</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}