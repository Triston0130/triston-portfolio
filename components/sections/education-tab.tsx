"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Award, BookOpen, Star } from "lucide-react"
import { Education } from "@/types"

interface EducationTabProps {
  education: Education[]
}

export function EducationTab({ education }: EducationTabProps) {
  return (
    <div className="space-y-6">
      <h2 className="section-title text-left">Educational Background</h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={edu.id} className="relative">
            {/* Timeline indicator */}
            <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <GraduationCap className="w-4 h-4 text-blue-600" />
            </div>
            
            <CardHeader className="ml-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {edu.institution}
                  </CardTitle>
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-blue-600">{edu.degree}</p>
                    {edu.field && (
                      <p className="text-gray-600">{edu.field}</p>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.graduation}</span>
                  </div>
                  {edu.gpa && (
                    <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="ml-8 space-y-6">
              {edu.honors && edu.honors.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <h4 className="font-semibold text-gray-800">Honors & Recognition</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-2">
                    {edu.honors.map((honor, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <Award className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{honor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {edu.certificates && edu.certificates.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-800">Certificates Earned</h4>
                  </div>
                  <div className="space-y-2">
                    {edu.certificates.map((cert, i) => (
                      <div key={i} className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <p className="font-medium text-gray-800">{cert}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {edu.courses && edu.courses.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-800">Relevant Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Timeline line */}
      <div className="absolute left-0 top-20 bottom-20 w-0.5 bg-gray-200 ml-4" />
    </div>
  )
}