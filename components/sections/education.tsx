"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen, Calendar, Star } from "lucide-react"
import { Education as EducationType } from "@/types"

interface EducationProps {
  education: EducationType[]
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Educational Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building expertise through continuous learning and academic excellence
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2"></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-xl">
                        <GraduationCap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 group-hover:text-purple-600 transition-colors">
                          {edu.institution}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700 dark:text-gray-300">
                          {edu.degree}
                          {edu.field && (
                            <span className="block text-purple-600 dark:text-purple-400 mt-1">
                              {edu.field}
                            </span>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.graduation}
                      </div>
                      {edu.gpa && (
                        <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 px-3 py-1 rounded-full">
                          <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {edu.honors && edu.honors.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Honors & Recognition</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-2">
                        {edu.honors.map((honor, i) => (
                          <div key={i} className="flex items-center space-x-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                            <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{honor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {edu.certificates && edu.certificates.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-green-500" />
                        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Certificates Earned</h4>
                      </div>
                      <div className="space-y-2">
                        {edu.certificates.map((cert, i) => (
                          <div key={i} className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {edu.courses && edu.courses.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-blue-500" />
                        <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Relevant Coursework</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-default"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}