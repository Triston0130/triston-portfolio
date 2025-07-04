"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Mail, Phone, MapPin, Linkedin, FileText, GraduationCap, Briefcase, Award, User, FolderOpen } from "lucide-react"
import Link from "next/link"

interface NavigationProps {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    address: string
    linkedin?: string
    registryId?: string
  }
}

export function Navigation({ personalInfo }: NavigationProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{personalInfo.name}</h1>
              <p className="text-lg text-blue-600 font-medium mt-1">{personalInfo.title}</p>
              {personalInfo.registryId && (
                <p className="text-sm text-gray-500 mt-1">{personalInfo.registryId}</p>
              )}
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
              <Link href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{personalInfo.email}</span>
              </Link>
              <Link href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{personalInfo.phone}</span>
              </Link>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">California</span>
              </div>
              {personalInfo.linkedin && (
                <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container py-8">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8 bg-white rounded-lg shadow-sm border">
            <TabsTrigger value="about" className="flex items-center gap-2 py-3">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger value="resume" className="flex items-center gap-2 py-3">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Resume</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2 py-3">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2 py-3">
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="certifications" className="flex items-center gap-2 py-3">
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Certifications</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2 py-3">
              <FolderOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Portfolio</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <div id="about-content">
              {/* About content will be inserted here */}
            </div>
          </TabsContent>

          <TabsContent value="resume" className="space-y-6">
            <div id="resume-content">
              {/* Resume content will be inserted here */}
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <div id="education-content">
              {/* Education content will be inserted here */}
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <div id="experience-content">
              {/* Experience content will be inserted here */}
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <div id="certifications-content">
              {/* Certifications content will be inserted here */}
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <div id="portfolio-content">
              {/* Portfolio content will be inserted here */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}