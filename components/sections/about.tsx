"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Target, Lightbulb, BookOpen, Award } from "lucide-react"

const stats = [
  { number: "5+", label: "Years Experience", icon: Award },
  { number: "100+", label: "Students Impacted", icon: Users },
  { number: "2-5", label: "Age Range Specialty", icon: Heart },
  { number: "3.81", label: "Academic GPA", icon: Target }
]

const values = [
  {
    icon: Heart,
    title: "Passion for Teaching",
    description: "Dedicated to fostering young minds and creating engaging learning environments that inspire lifelong learning."
  },
  {
    icon: Users,
    title: "Child Development Focus",
    description: "Specialized expertise in early childhood development with hands-on experience working with children ages 2-5."
  },
  {
    icon: Lightbulb,
    title: "Innovative Approach",
    description: "Utilizing modern educational techniques and technology to create dynamic, interactive learning experiences."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Committed to professional development and staying current with the latest educational research and practices."
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm passionate about early childhood education and dedicated to helping young learners 
            develop the skills and confidence they need to succeed.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl">
                    <stat.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Personal Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 border-0 text-white">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                My Mission
              </h3>
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
                "I aspire to become a teacher of young children because the teachers I met throughout 
                my academic journey have not only acted as a guide for me, but also pushed me to become 
                the lifelong learner that I see in myself now. I also hope to complete graduate studies 
                and conduct field research to contribute to the advancement of early childhood education."
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}