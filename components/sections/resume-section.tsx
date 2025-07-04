"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Print, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Education, Experience, Certificate, Activity } from "@/types"

interface ResumeSectionProps {
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
  education: Education[]
  experience: Experience[]
  certificates: Certificate[]
  activities: Activity[]
}

export function ResumeSection({ personalInfo, summary, education, experience, certificates, activities }: ResumeSectionProps) {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // Create a downloadable version
    const resumeContent = document.getElementById('resume-content')
    if (resumeContent) {
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>${personalInfo.name} - Resume</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                h1 { color: #1e40af; margin-bottom: 5px; }
                h2 { color: #1e40af; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin-top: 20px; }
                h3 { color: #374151; margin-bottom: 5px; }
                .contact-info { margin-bottom: 20px; }
                .section { margin-bottom: 25px; }
                .job, .edu { margin-bottom: 15px; }
                .job-title, .degree { font-weight: bold; }
                .company, .institution { font-style: italic; color: #6b7280; }
                .date { float: right; color: #6b7280; }
                ul { margin: 5px 0; padding-left: 20px; }
                li { margin-bottom: 3px; }
              </style>
            </head>
            <body>
              ${resumeContent.innerHTML}
            </body>
          </html>
        `)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 250)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="section-title text-left">Resume</h2>
        <div className="flex gap-3">
          <Button onClick={handlePrint} variant="outline" size="sm">
            <Print className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button onClick={handleDownload} size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <Card id="resume-content" className="print:shadow-none print:border-none">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-blue-600 mb-4">{personalInfo.title}</p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {personalInfo.address}
              </div>
              {personalInfo.linkedin && (
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </div>
              )}
            </div>
            {personalInfo.registryId && (
              <p className="text-sm text-gray-500 mt-2">{personalInfo.registryId}</p>
            )}
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="relative">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      {edu.field && <p className="text-gray-600">{edu.field}</p>}
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">{edu.graduation}</p>
                      {edu.gpa && <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                  
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="mb-2">
                      <p className="font-medium text-gray-800 text-sm">Honors:</p>
                      <p className="text-gray-600 text-sm">{edu.honors.join(", ")}</p>
                    </div>
                  )}
                  
                  {edu.certificates && edu.certificates.length > 0 && (
                    <div className="mb-2">
                      <p className="font-medium text-gray-800 text-sm">Certificates:</p>
                      <ul className="text-gray-600 text-sm list-disc list-inside">
                        {edu.certificates.map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {edu.courses && edu.courses.length > 0 && (
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Relevant Coursework:</p>
                      <p className="text-gray-600 text-sm">{edu.courses.join(", ")}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      {exp.contact && <p className="text-gray-500 text-sm">{exp.contact}</p>}
                    </div>
                    <p className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate}</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {certificates.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Certifications
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {certificates.map((cert) => (
                  <div key={cert.id} className="text-sm">
                    <p className="font-medium text-gray-900">{cert.name}</p>
                    <p className="text-gray-600">{cert.issuer} • {cert.date}</p>
                    {cert.validUntil && (
                      <p className="text-gray-500">Valid until {cert.validUntil}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activities */}
          {activities.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">
                Extracurricular Activities
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {activities.map((activity) => (
                  <div key={activity.id} className="text-sm">
                    <p className="font-medium text-gray-900">{activity.name}</p>
                    <p className="text-gray-600">{activity.period}</p>
                    {activity.description && (
                      <p className="text-gray-500">{activity.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}