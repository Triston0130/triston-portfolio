"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useDropzone } from "react-dropzone"
import { 
  Upload, 
  FileText, 
  File, 
  Presentation, 
  BookOpen, 
  Award, 
  Download, 
  Eye, 
  Trash2,
  Search,
  Filter
} from "lucide-react"
import { Document } from "@/types"

interface PortfolioGalleryProps {
  documents: Document[]
  onDocumentUpload?: (files: File[]) => void
  onDocumentDelete?: (id: string) => void
}

const documentTypes = [
  { value: "all", label: "All Documents", icon: File },
  { value: "lesson-plan", label: "Lesson Plans", icon: BookOpen },
  { value: "assignment", label: "Assignments", icon: FileText },
  { value: "presentation", label: "Presentations", icon: Presentation },
  { value: "paper", label: "Research Papers", icon: FileText },
  { value: "certificate", label: "Certificates", icon: Award },
  { value: "other", label: "Other", icon: File }
]

const getDocumentIcon = (type: Document['type']) => {
  const docType = documentTypes.find(t => t.value === type)
  return docType ? docType.icon : File
}

const getDocumentColor = (type: Document['type']) => {
  const colors = {
    'lesson-plan': 'bg-green-50 border-green-200 text-green-700',
    'assignment': 'bg-blue-50 border-blue-200 text-blue-700',
    'presentation': 'bg-purple-50 border-purple-200 text-purple-700',
    'paper': 'bg-orange-50 border-orange-200 text-orange-700',
    'certificate': 'bg-yellow-50 border-yellow-200 text-yellow-700',
    'other': 'bg-gray-50 border-gray-200 text-gray-700'
  }
  return colors[type] || colors.other
}

export function PortfolioGallery({ documents, onDocumentUpload, onDocumentDelete }: PortfolioGalleryProps) {
  const [uploadedFiles, setUploadedFiles] = useState<Document[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newDocuments: Document[] = acceptedFiles.map((file, index) => ({
      id: `uploaded-${Date.now()}-${index}`,
      title: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
      type: 'other',
      fileUrl: URL.createObjectURL(file),
      uploadDate: new Date().toISOString(),
      category: 'Uploaded Documents',
      description: `Uploaded ${file.type || 'document'} • ${(file.size / 1024 / 1024).toFixed(1)}MB`
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
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'text/*': ['.txt']
    }
  })

  const allDocuments = [...documents, ...uploadedFiles]
  
  const filteredDocuments = allDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "all" || doc.type === selectedType
    return matchesSearch && matchesType
  })

  const handleDelete = (id: string) => {
    if (id.startsWith('uploaded-')) {
      setUploadedFiles(uploadedFiles.filter(doc => doc.id !== id))
    } else if (onDocumentDelete) {
      onDocumentDelete(id)
    }
  }

  const documentCounts = documentTypes.map(type => ({
    ...type,
    count: type.value === "all" 
      ? allDocuments.length 
      : allDocuments.filter(doc => doc.type === type.value).length
  }))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="section-title text-left">Portfolio & Documents</h2>
        <p className="text-gray-500">
          {filteredDocuments.length} of {allDocuments.length} documents
        </p>
      </div>

      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div {...getRootProps()} className="cursor-pointer">
            <input {...getInputProps()} />
            <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragActive 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}>
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                {isDragActive ? "Drop files here" : "Drag & drop files here"}
              </p>
              <p className="text-gray-500 mb-4">
                or click to browse files
              </p>
              <p className="text-xs text-gray-400">
                Supports: PDF, Word, PowerPoint, Images, Text files
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
          >
            {documentCounts.map(type => (
              <option key={type.value} value={type.value}>
                {type.label} ({type.count})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Document Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {documentCounts.map(type => {
          const Icon = type.icon
          const isActive = selectedType === type.value
          return (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value)}
              className={`p-4 rounded-lg border text-center transition-colors ${
                isActive 
                  ? 'bg-blue-50 border-blue-200 text-blue-700' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-6 h-6 mx-auto mb-2" />
              <p className="text-sm font-medium">{type.label}</p>
              <p className="text-xs text-gray-500">{type.count}</p>
            </button>
          )
        })}
      </div>

      {/* Document Grid */}
      {filteredDocuments.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || selectedType !== "all" 
                ? "Try adjusting your search or filter criteria"
                : "Upload your first document to get started"
              }
            </p>
            {searchTerm || selectedType !== "all" ? (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("")
                  setSelectedType("all")
                }}
              >
                Clear Filters
              </Button>
            ) : null}
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc, index) => {
            const Icon = getDocumentIcon(doc.type)
            const colorClass = getDocumentColor(doc.type)
            
            return (
              <Card key={doc.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-lg ${colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(doc.fileUrl, '_blank')}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(doc.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {doc.title}
                  </h3>
                  
                  {doc.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {doc.description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{doc.category}</span>
                    <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                  </div>
                  
                  {doc.tags && doc.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {doc.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {doc.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          +{doc.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  
                  <Button 
                    className="w-full mt-4" 
                    variant="outline"
                    onClick={() => window.open(doc.fileUrl, '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    View Document
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}