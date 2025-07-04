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
  Filter,
  Play,
  Maximize2,
  X,
  Lock,
  Unlock
} from "lucide-react"
import { Document } from "@/types"

interface EnhancedPortfolioGalleryProps {
  documents: Document[]
  onDocumentUpload?: (files: File[]) => void
  onDocumentDelete?: (id: string) => void
  showAdminControls?: boolean
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
    'lesson-plan': 'from-emerald-400 to-teal-600',
    'assignment': 'from-blue-400 to-indigo-600',
    'presentation': 'from-purple-400 to-pink-600',
    'paper': 'from-orange-400 to-red-600',
    'certificate': 'from-yellow-400 to-amber-600',
    'other': 'from-gray-400 to-gray-600'
  }
  return colors[type] || colors.other
}

export function EnhancedPortfolioGallery({ 
  documents, 
  onDocumentUpload, 
  onDocumentDelete,
  showAdminControls = false 
}: EnhancedPortfolioGalleryProps) {
  const [uploadedFiles, setUploadedFiles] = useState<Document[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("all")
  const [previewDocument, setPreviewDocument] = useState<Document | null>(null)
  const [isAdminMode, setIsAdminMode] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newDocuments: Document[] = acceptedFiles.map((file, index) => ({
      id: `uploaded-${Date.now()}-${index}`,
      title: file.name.replace(/\.[^/.]+$/, ""),
      type: file.name.includes('.ppt') || file.name.includes('.pptx') ? 'presentation' : 'other',
      fileUrl: URL.createObjectURL(file),
      uploadDate: new Date().toISOString(),
      category: 'My Teaching Materials',
      description: `${file.type || 'document'} • ${(file.size / 1024 / 1024).toFixed(1)}MB`
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

  const openPreview = (doc: Document) => {
    setPreviewDocument(doc)
  }

  const closePreview = () => {
    setPreviewDocument(null)
  }

  return (
    <>
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="section-title">✨ My Teaching Portfolio ✨</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to my creative classroom! Here you'll find lesson plans, assignments, and educational materials 
            that bring learning to life. Click on any document to preview it right here! 🎓
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Admin Toggle */}
        {showAdminControls && (
          <div className="flex justify-end">
            <Button
              onClick={() => setIsAdminMode(!isAdminMode)}
              variant={isAdminMode ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              {isAdminMode ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
              {isAdminMode ? "Admin Mode" : "View Mode"}
            </Button>
          </div>
        )}

        {/* Upload Area - Only show in admin mode */}
        {isAdminMode && (
          <Card className="glass-card overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Upload className="w-6 h-6" />
                📚 Upload New Materials
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div {...getRootProps()} className="cursor-pointer">
                <input {...getInputProps()} />
                <div className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  isDragActive 
                    ? 'border-purple-400 bg-purple-50 scale-105' 
                    : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50'
                }`}>
                  <div className="animate-bounce mb-4">
                    <Upload className="w-16 h-16 text-purple-400 mx-auto" />
                  </div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">
                    {isDragActive ? "Drop your amazing files here! 🎉" : "Drag & drop your teaching materials"}
                  </p>
                  <p className="text-gray-500 mb-4">
                    or click to browse your computer
                  </p>
                  <p className="text-sm text-gray-400">
                    📄 Supports: PDF, Word, PowerPoint, Images • Perfect for lesson plans & assignments!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
            <input
              type="text"
              placeholder="Search my amazing materials... 🔍"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-purple-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="pl-12 pr-8 py-4 border-2 border-purple-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 appearance-none bg-white/80 backdrop-blur-sm cursor-pointer transition-all duration-300"
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {documentCounts.map(type => {
            const Icon = type.icon
            const isActive = selectedType === type.value
            return (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 transform hover:scale-105 ${
                  isActive 
                    ? 'bg-gradient-to-br from-purple-400 to-pink-500 border-purple-300 text-white shadow-lg' 
                    : 'bg-white/80 backdrop-blur-sm border-purple-200 hover:bg-purple-50 hover:border-purple-300'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${isActive ? 'text-white' : 'text-purple-500'}`} />
                <p className={`font-semibold ${isActive ? 'text-white' : 'text-gray-700'}`}>{type.label}</p>
                <p className={`text-sm ${isActive ? 'text-purple-100' : 'text-gray-500'}`}>{type.count} items</p>
              </button>
            )
          })}
        </div>

        {/* Document Grid */}
        {filteredDocuments.length === 0 ? (
          <Card className="glass-card">
            <CardContent className="text-center py-16">
              <div className="animate-bounce mb-6">
                <FileText className="w-24 h-24 text-purple-300 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">No documents found! 📭</h3>
              <p className="text-gray-500 mb-6 text-lg">
                {searchTerm || selectedType !== "all" 
                  ? "Try adjusting your search or filter to find what you're looking for! 🔍"
                  : "Upload your first teaching material to get started! 🚀"
                }
              </p>
              {searchTerm || selectedType !== "all" ? (
                <Button 
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedType("all")
                  }}
                  className="btn-creative"
                >
                  Clear Filters ✨
                </Button>
              ) : null}
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocuments.map((doc, index) => {
              const Icon = getDocumentIcon(doc.type)
              const gradientClass = getDocumentColor(doc.type)
              
              return (
                <Card key={doc.id} className="glass-card group overflow-hidden document-preview">
                  <div className={`h-2 bg-gradient-to-r ${gradientClass}`}></div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradientClass} text-white shadow-lg`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Button
                          size="sm"
                          onClick={() => openPreview(doc)}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        {doc.type === 'presentation' && (
                          <Button
                            size="sm"
                            onClick={() => openPreview(doc)}
                            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white rounded-xl"
                          >
                            <Play className="w-4 h-4" />
                          </Button>
                        )}
                        {isAdminMode && (
                          <Button
                            size="sm"
                            onClick={() => handleDelete(doc.id)}
                            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-xl"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-gray-800 mb-3 text-lg line-clamp-2">
                      {doc.title}
                    </h3>
                    
                    {doc.description && (
                      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {doc.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="font-medium">{doc.category}</span>
                      <span>{new Date(doc.uploadDate).toLocaleDateString()}</span>
                    </div>
                    
                    {doc.tags && doc.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {doc.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {doc.tags.length > 3 && (
                          <span className="text-xs px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 rounded-full font-medium">
                            +{doc.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold py-3 transition-all duration-300 transform hover:scale-105" 
                      onClick={() => openPreview(doc)}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Preview Document ✨
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>

      {/* Document Preview Modal */}
      {previewDocument && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl max-h-[90vh] w-full overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <div>
                <h3 className="text-2xl font-bold">{previewDocument.title}</h3>
                <p className="text-purple-100">{previewDocument.category}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => window.open(previewDocument.fileUrl, '_blank')}
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <Maximize2 className="w-5 h-5 mr-2" />
                  Full Screen
                </Button>
                <Button
                  onClick={closePreview}
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="h-[70vh] p-6">
              {previewDocument.fileUrl.includes('.pdf') ? (
                <iframe
                  src={previewDocument.fileUrl}
                  className="w-full h-full rounded-2xl border-2 border-purple-200"
                  title={previewDocument.title}
                />
              ) : previewDocument.fileUrl.includes('.ppt') || previewDocument.fileUrl.includes('.pptx') ? (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                  <div className="text-center">
                    <Presentation className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-gray-700 mb-4">PowerPoint Preview</h4>
                    <p className="text-gray-600 mb-6">Click the button below to view this presentation!</p>
                    <Button
                      onClick={() => window.open(previewDocument.fileUrl, '_blank')}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-2xl font-semibold"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Open Presentation
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-purple-200">
                  <div className="text-center">
                    <FileText className="w-24 h-24 text-purple-400 mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-gray-700 mb-4">Document Preview</h4>
                    <p className="text-gray-600 mb-6">Click the button below to view this document!</p>
                    <Button
                      onClick={() => window.open(previewDocument.fileUrl, '_blank')}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-2xl font-semibold"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Open Document
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}