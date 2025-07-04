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
    <div className="min-h-screen relative">
      {/* Floating Educational Elements */}
      <div className="floating-elements">
        <div className="floating-element">📚</div>
        <div className="floating-element">🎓</div>
        <div className="floating-element">✨</div>
        <div className="floating-element">🌟</div>
        <div className="floating-element">📝</div>
        <div className="floating-element">🎨</div>
      </div>
      
      {/* Header */}
      <header className="glass-card mx-4 mt-4 relative z-10">
        <div className="container py-8">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2 animate-pulse">
              {portfolioData.personalInfo.name}
            </h1>
            <p className="text-2xl font-medium text-gray-700 mb-2">{portfolioData.personalInfo.title}</p>
            {portfolioData.personalInfo.registryId && (
              <p className="text-sm text-gray-500 mb-4">{portfolioData.personalInfo.registryId}</p>
            )}
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <Link href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center gap-2 btn-creative">
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email Me</span>
            </Link>
            <Link href={`tel:${portfolioData.personalInfo.phone}`} className="flex items-center gap-2 btn-creative">
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call Me</span>
            </Link>
            <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium">
              <MapPin className="w-5 h-5" />
              <span>California</span>
            </div>
            {portfolioData.personalInfo.linkedin && (
              <Link href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 btn-creative">
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container py-8 relative z-10">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="glass-card grid w-full grid-cols-2 md:grid-cols-6 mb-12 p-2">
            <TabsTrigger 
              value="about" 
              className="flex items-center gap-2 py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline font-semibold">About Me</span>
            </TabsTrigger>
            <TabsTrigger 
              value="resume" 
              className="flex items-center gap-2 py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <FileText className="w-5 h-5" />
              <span className="hidden sm:inline font-semibold">Resume</span>
            </TabsTrigger>
            <TabsTrigger 
              value="education" 
              className="flex items-center gap-2 py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              <span className="hidden sm:inline font-semibold">Education</span>
            </TabsTrigger>
            <TabsTrigger 
              value="experience" 
              className="flex items-center gap-2 py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <Briefcase className="w-5 h-5" />
              <span className="hidden sm:inline font-semibold">Experience</span>
            </TabsTrigger>
            <TabsTrigger 
              value="certifications" 
              className="flex items-center gap-2 py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <Award className="w-5 h-5" />
              <span className="hidden sm:inline font-semibold">Certifications</span>
            </TabsTrigger>
            <TabsTrigger 
              value="portfolio" 
              className="flex items-center gap-2 py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <FolderOpen className="w-5 h-5" />
              <span className="hidden sm:inline font-semibold">Portfolio</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="glass-card space-y-6 p-8 mx-4">
            <AboutProfessional summary={portfolioData.summary} />
          </TabsContent>

          <TabsContent value="resume" className="glass-card space-y-6 p-8 mx-4">
            <ResumeSection 
              personalInfo={portfolioData.personalInfo}
              summary={portfolioData.summary}
              education={portfolioData.education}
              experience={portfolioData.experience}
              certificates={portfolioData.certificates}
              activities={portfolioData.activities}
            />
          </TabsContent>

          <TabsContent value="education" className="glass-card space-y-6 p-8 mx-4">
            <EducationTab education={portfolioData.education} />
          </TabsContent>

          <TabsContent value="experience" className="glass-card space-y-6 p-8 mx-4">
            <ExperienceTab experience={portfolioData.experience} />
          </TabsContent>

          <TabsContent value="certifications" className="glass-card space-y-6 p-8 mx-4">
            <CertificationsTab 
              certificates={portfolioData.certificates}
              activities={portfolioData.activities}
            />
          </TabsContent>

          <TabsContent value="portfolio" className="glass-card space-y-6 p-8 mx-4">
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