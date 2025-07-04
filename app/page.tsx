"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Mail, Phone, MapPin, Linkedin, FileText, GraduationCap, Briefcase, Award, User, FolderOpen } from "lucide-react"
import Link from "next/link"

import { AboutProfessional } from "@/components/sections/about-professional"
import { ResumeSection } from "@/components/sections/resume-section"
import { EducationTab } from "@/components/sections/education-tab"
import { ExperienceTab } from "@/components/sections/experience-tab"
import { CertificationsTab } from "@/components/sections/certifications-tab"
import { EnhancedPortfolioGallery } from "@/components/sections/enhanced-portfolio-gallery"
import { portfolioData } from "@/lib/portfolio-data"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Professional Header */}
      <header className="hero-card mx-4 mt-8 mb-12">
        <div className="container py-16">
          <div className="text-center">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {portfolioData.personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              {portfolioData.personalInfo.title}
            </p>
            
            {portfolioData.personalInfo.registryId && (
              <div className="mb-10">
                <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-gray-800 rounded-full text-sm font-semibold border border-white/30 shadow-lg">
                  🎓 Registry ID: {portfolioData.personalInfo.registryId}
                </span>
              </div>
            )}
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={`mailto:${portfolioData.personalInfo.email}`} className="btn-modern inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </Link>
              <Link href={`tel:${portfolioData.personalInfo.phone}`} className="btn-outline inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                {portfolioData.personalInfo.phone}
              </Link>
              <div className="btn-outline inline-flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                California
              </div>
              {portfolioData.personalInfo.linkedin && (
                <Link href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Modern Navigation */}
      <div className="container mb-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="modern-nav grid w-full grid-cols-3 md:grid-cols-6 mb-12">
            <TabsTrigger value="about" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <User className="w-5 h-5" />
              <span className="text-xs md:text-sm">About</span>
            </TabsTrigger>
            <TabsTrigger value="resume" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <FileText className="w-5 h-5" />
              <span className="text-xs md:text-sm">Resume</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <GraduationCap className="w-5 h-5" />
              <span className="text-xs md:text-sm">Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <Briefcase className="w-5 h-5" />
              <span className="text-xs md:text-sm">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <Award className="w-5 h-5" />
              <span className="text-xs md:text-sm">Certs</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <FolderOpen className="w-5 h-5" />
              <span className="text-xs md:text-sm">Portfolio</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="modern-card mx-4 p-10">
            <AboutProfessional summary={portfolioData.summary} />
          </TabsContent>

          <TabsContent value="resume" className="modern-card mx-4 p-10">
            <ResumeSection 
              personalInfo={portfolioData.personalInfo}
              summary={portfolioData.summary}
              education={portfolioData.education}
              experience={portfolioData.experience}
              certificates={portfolioData.certificates}
              activities={portfolioData.activities}
            />
          </TabsContent>

          <TabsContent value="education" className="modern-card mx-4 p-10">
            <EducationTab education={portfolioData.education} />
          </TabsContent>

          <TabsContent value="experience" className="modern-card mx-4 p-10">
            <ExperienceTab experience={portfolioData.experience} />
          </TabsContent>

          <TabsContent value="certifications" className="modern-card mx-4 p-10">
            <CertificationsTab 
              certificates={portfolioData.certificates}
              activities={portfolioData.activities}
            />
          </TabsContent>

          <TabsContent value="portfolio" className="modern-card mx-4 p-10">
            <EnhancedPortfolioGallery 
              documents={portfolioData.documents}
              onDocumentUpload={(files) => {
                console.log('Files uploaded:', files)
              }}
              onDocumentDelete={(id) => {
                console.log('Document deleted:', id)
              }}
              showAdminControls={false}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}