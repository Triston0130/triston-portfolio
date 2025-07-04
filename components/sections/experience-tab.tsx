"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, Phone, MapPin } from "lucide-react"
import { Experience } from "@/types"

interface ExperienceTabProps {
  experience: Experience[]
}

export function ExperienceTab({ experience }: ExperienceTabProps) {
  return (
    <div className="space-y-6">
      <h2 className="section-title text-left">Professional Experience</h2>
      
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <Card key={exp.id} className="relative">
            {/* Timeline indicator */}
            <div className="absolute -left-4 top-8 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <Briefcase className="w-4 h-4 text-green-600" />
            </div>
            
            <CardHeader className="ml-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {exp.title}
                  </CardTitle>
                  <div className="space-y-1">
                    <p className="text-lg font-medium text-green-600">{exp.company}</p>
                    {exp.contact && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{exp.contact}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.endDate === "Current" ? "Current Position" : "Completed"}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="ml-8 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Responsibilities & Achievements</h4>
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {exp.skills && exp.skills.length > 0 && (
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">Skills Utilized</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {skill}
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