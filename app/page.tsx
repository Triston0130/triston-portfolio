"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Documents } from "@/components/sections/documents"
import { Achievements } from "@/components/sections/achievements"
import { Contact } from "@/components/sections/contact"
import { portfolioData } from "@/lib/portfolio-data"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main>
        <div id="home">
          <Hero 
            personalInfo={portfolioData.personalInfo}
            summary={portfolioData.summary}
          />
        </div>
        
        <About />
        
        <Education education={portfolioData.education} />
        
        <Experience experience={portfolioData.experience} />
        
        <Achievements 
          certificates={portfolioData.certificates}
          activities={portfolioData.activities}
        />
        
        <div id="portfolio">
          <Documents 
            documents={portfolioData.documents}
            onDocumentUpload={(files) => {
              console.log('Files uploaded:', files)
            }}
            onDocumentDelete={(id) => {
              console.log('Document deleted:', id)
            }}
          />
        </div>
        
        <Contact personalInfo={portfolioData.personalInfo} />
      </main>
      
      <Footer personalInfo={portfolioData.personalInfo} />
    </div>
  )
}