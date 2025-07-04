"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { useDropzone } from "react-dropzone"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FileText, 
  Upload, 
  Download, 
  Trash2, 
  Search,
  File,
  FileSpreadsheet,
  Presentation,
  BookOpen
} from "lucide-react"
import { Document } from "@/types"

interface DocumentsProps {
  documents: Document[]
  onDocumentUpload?: (files: File[]) => void
  onDocumentDelete?: (id: string) => void
}

const documentCategories = [
  { value: "all", label: "All Documents" },
  { value: "assignment", label: "Assignments" },
  { value: "paper", label: "Papers" },
  { value: "presentation", label: "Presentations" },
  { value: "lesson-plan", label: "Lesson Plans" },
  { value: "certificate", label: "Certificates" },
  { value: "other", label: "Other" }
]

const getDocumentIcon = (type: Document['type']) => {
  switch (type) {
    case 'assignment':
      return <FileText className="w-5 h-5" />
    case 'paper':
      return <File className="w-5 h-5" />
    case 'presentation':
      return <Presentation className="w-5 h-5" />
    case 'lesson-plan':
      return <BookOpen className="w-5 h-5" />
    case 'certificate':
      return <FileSpreadsheet className="w-5 h-5" />
    default:
      return <File className="w-5 h-5" />
  }
}

export function Documents({ documents, onDocumentUpload, onDocumentDelete }: DocumentsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [uploadedFiles, setUploadedFiles] = useState<Document[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newDocuments: Document[] = acceptedFiles.map((file, index) => ({
      id: `uploaded-${Date.now()}-${index}`,
      title: file.name,
      type: 'other',
      fileUrl: URL.createObjectURL(file),
      uploadDate: new Date().toISOString(),
      category: 'Uploaded Documents',
      description: `Uploaded on ${new Date().toLocaleDateString()}`
    }))
    
    setUploadedFiles([...uploadedFiles, ...newDocuments])
    
    if (onDocumentUpload) {
      onDocumentUpload(acceptedFiles)
    }
  }, [uploadedFiles, onDocumentUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    }
  })

  const allDocuments = [...documents, ...uploadedFiles]
  
  const filteredDocuments = allDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || doc.type === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDelete = (id: string) => {
    if (id.startsWith('uploaded-')) {
      setUploadedFiles(uploadedFiles.filter(doc => doc.id !== id))
    } else if (onDocumentDelete) {
      onDocumentDelete(id)
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Portfolio & Documents
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my academic work, projects, and professional documents
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div {...getRootProps()} className="cursor-pointer">
              <input {...getInputProps()} />
              <Card className={`border-2 border-dashed transition-all ${isDragActive ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-300 dark:border-gray-600'}`}>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium mb-2">
                    {isDragActive ? "Drop the files here" : "Drag & drop files here"}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    or click to select files
                  </p>
                  <Button variant="outline">
                    Browse Files
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
              {documentCategories.map(cat => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredDocuments.length === 0 ? (
                  <div className="col-span-full text-center py-12">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">
                      No documents found. Upload some documents to get started!
                    </p>
                  </div>
                ) : (
                  filteredDocuments.map((doc, index) => (
                    <motion.div
                      key={doc.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              {getDocumentIcon(doc.type)}
                              <div>
                                <CardTitle className="text-base line-clamp-1">
                                  {doc.title}
                                </CardTitle>
                                <CardDescription className="text-xs">
                                  {doc.category} • {new Date(doc.uploadDate).toLocaleDateString()}
                                </CardDescription>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          {doc.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                              {doc.description}
                            </p>
                          )}
                          {doc.tags && doc.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {doc.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1"
                              onClick={() => window.open(doc.fileUrl, '_blank')}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDelete(doc.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}