"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Target, BookOpen, Award, Calendar } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "5+ Years Experience",
    description: "Comprehensive experience in retail, customer service, and education",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Ages 2-5 Specialist",
    description: "Focused expertise in early childhood development",
    color: "text-green-600"
  },
  {
    icon: Target,
    title: "3.81 GPA",
    description: "Academic excellence in Early Childhood Education",
    color: "text-purple-600"
  },
  {
    icon: BookOpen,
    title: "Research Focused",
    description: "Committed to graduate studies and field research",
    color: "text-orange-600"
  }
]

const coreValues = [
  {
    title: "Lifelong Learning",
    description: "Committed to continuous professional development and staying current with educational research and best practices."
  },
  {
    title: "Child-Centered Approach",
    description: "Focused on creating engaging, developmentally appropriate learning environments that meet each child's unique needs."
  },
  {
    title: "Family Partnership",
    description: "Believes in building strong partnerships with families to support children's growth and development."
  },
  {
    title: "Evidence-Based Practice",
    description: "Applies research-based strategies and assessment tools like DRDP and ASQ-3 to inform teaching practices."
  }
]

interface AboutProfessionalProps {
  summary: string
}

export function AboutProfessional({ summary }: AboutProfessionalProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed text-lg">{summary}</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((highlight, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            Core Values & Teaching Philosophy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium text-gray-900">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Target className="w-5 h-5" />
            Career Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900">Immediate Goal</h4>
                <p className="text-blue-800 text-sm">Complete B.A. in Child & Adolescent Development at Sacramento State (Expected May 2026)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900">Professional Aspiration</h4>
                <p className="text-blue-800 text-sm">Become a teacher of young children, inspired by educators who fostered my love of lifelong learning</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900">Long-term Vision</h4>
                <p className="text-blue-800 text-sm">Pursue graduate studies and conduct field research to contribute to early childhood education advancement</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}