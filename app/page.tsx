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
      {/* Clean Hero Section */}
      <header className="hero-section">
        <div className="container py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-gray-900">
              {portfolioData.personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-normal">
              {portfolioData.personalInfo.title}
            </p>
            
            {portfolioData.personalInfo.registryId && (
              <div className="mb-10">
                <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  Registry ID: {portfolioData.personalInfo.registryId}
                </span>
              </div>
            )}
            
            <div className="flex flex-wrap justify-center gap-3">
              <Link href={`mailto:${portfolioData.personalInfo.email}`} className="btn-primary inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
              <Link href={`tel:${portfolioData.personalInfo.phone}`} className="btn-secondary inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {portfolioData.personalInfo.phone}
              </Link>
              <div className="btn-secondary inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                California
              </div>
              {portfolioData.personalInfo.linkedin && (
                <Link href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Clean Navigation */}
      <div className="container mb-16">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="clean-nav grid w-full grid-cols-3 md:grid-cols-6 mb-12 max-w-4xl mx-auto">
            <TabsTrigger value="about" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">About</span>
            </TabsTrigger>
            <TabsTrigger value="resume" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Resume</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm">Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <Award className="w-4 h-4" />
              <span className="text-sm">Certifications</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="nav-tab flex flex-col md:flex-row items-center gap-1 md:gap-2">
              <FolderOpen className="w-4 h-4" />
              <span className="text-sm">Portfolio</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="clean-card max-w-4xl mx-auto p-8">
            <AboutProfessional summary={portfolioData.summary} />
          </TabsContent>

          <TabsContent value="resume" className="clean-card max-w-4xl mx-auto p-8">
            <ResumeSection 
              personalInfo={portfolioData.personalInfo}
              summary={portfolioData.summary}
              education={portfolioData.education}
              experience={portfolioData.experience}
              certificates={portfolioData.certificates}
              activities={portfolioData.activities}
            />
          </TabsContent>

          <TabsContent value="education" className="clean-card max-w-4xl mx-auto p-8">
            <EducationTab education={portfolioData.education} />
          </TabsContent>

          <TabsContent value="experience" className="clean-card max-w-4xl mx-auto p-8">
            <ExperienceTab experience={portfolioData.experience} />
          </TabsContent>

          <TabsContent value="certifications" className="clean-card max-w-4xl mx-auto p-8">
            <CertificationsTab 
              certificates={portfolioData.certificates}
              activities={portfolioData.activities}
            />
          </TabsContent>

          <TabsContent value="portfolio" className="clean-card max-w-4xl mx-auto p-8">
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