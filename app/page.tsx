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
            <h1 className="mb-4">
              {portfolioData.personalInfo.name}
            </h1>
            <p className="text-xl text-gray-600 mb-6 font-medium">
              {portfolioData.personalInfo.title}
            </p>
            
            {portfolioData.personalInfo.registryId && (
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium border border-accent-200">
                  Registry ID: {portfolioData.personalInfo.registryId}
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
          <TabsList className="modern-nav grid w-full grid-cols-2 md:grid-cols-6 mb-12">
            <TabsTrigger value="about" className="nav-tab flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger value="resume" className="nav-tab flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span className="hidden sm:inline">Resume</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="nav-tab flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="nav-tab flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="nav-tab flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span className="hidden sm:inline">Certifications</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="nav-tab flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              <span className="hidden sm:inline">Portfolio</span>
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