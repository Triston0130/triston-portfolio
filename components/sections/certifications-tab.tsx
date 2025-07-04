"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, CheckCircle, Activity, Users } from "lucide-react"
import { Certificate, Activity as ActivityType } from "@/types"

interface CertificationsTabProps {
  certificates: Certificate[]
  activities: ActivityType[]
}

export function CertificationsTab({ certificates, activities }: CertificationsTabProps) {
  return (
    <div className="space-y-8">
      <h2 className="section-title text-left">Certifications & Activities</h2>
      
      {/* Certifications */}
      <div>
        <h3 className="subsection-title flex items-center gap-2">
          <Award className="w-6 h-6 text-blue-600" />
          Professional Certifications
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((cert) => {
            const isValid = cert.validUntil && new Date(cert.validUntil) > new Date()
            
            return (
              <Card key={cert.id} className="relative">
                <div className="absolute top-4 right-4">
                  {isValid ? (
                    <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3" />
                      Valid
                    </div>
                  ) : cert.validUntil ? (
                    <div className="flex items-center gap-1 text-orange-600 bg-orange-50 px-2 py-1 rounded-full text-xs">
                      <Calendar className="w-3 h-3" />
                      Expired
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-xs">
                      <Award className="w-3 h-3" />
                      Permanent
                    </div>
                  )}
                </div>
                
                <CardHeader className="pr-20">
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-4 h-4" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Earned: {cert.date}</span>
                    </div>
                    
                    {cert.validUntil && (
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Valid until: {cert.validUntil}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      
      {/* Activities */}
      <div>
        <h3 className="subsection-title flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          Extracurricular Activities & Leadership
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {activities.map((activity) => (
            <Card key={activity.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{activity.name}</CardTitle>
                    <div className="flex items-center gap-2 text-purple-600 mt-1">
                      <Activity className="w-4 h-4" />
                      <span className="text-sm font-medium">{activity.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              {activity.description && (
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
      
      {/* Summary Stats */}
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{certificates.length}</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{activities.length}</div>
              <div className="text-sm text-gray-600">Activities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {certificates.filter(c => !c.validUntil || new Date(c.validUntil) > new Date()).length}
              </div>
              <div className="text-sm text-gray-600">Valid Certs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">100+</div>
              <div className="text-sm text-gray-600">Hours Training</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}