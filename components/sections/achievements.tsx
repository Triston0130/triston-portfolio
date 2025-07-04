"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Activity, Calendar, Shield } from "lucide-react"
import { Certificate, Activity as ActivityType } from "@/types"

interface AchievementsProps {
  certificates: Certificate[]
  activities: ActivityType[]
}

export function Achievements({ certificates, activities }: AchievementsProps) {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Achievements & Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Certificates
              </h3>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base flex items-start justify-between">
                          <span className="flex items-center gap-2">
                            <Shield className="w-4 h-4 flex-shrink-0" />
                            {cert.name}
                          </span>
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-1">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </CardDescription>
                      </CardHeader>
                      {cert.validUntil && (
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            Valid until {cert.validUntil}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6" />
                Extracurricular Activities
              </h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">{activity.name}</CardTitle>
                        <CardDescription>{activity.period}</CardDescription>
                      </CardHeader>
                      {activity.description && (
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground">
                            {activity.description}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}