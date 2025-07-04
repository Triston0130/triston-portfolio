export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  gpa?: string;
  graduation: string;
  honors?: string[];
  courses?: string[];
  certificates?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  contact?: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skills?: string[];
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  validUntil?: string;
}

export interface Activity {
  id: string;
  name: string;
  period: string;
  description?: string;
}

export interface Document {
  id: string;
  title: string;
  type: 'assignment' | 'paper' | 'presentation' | 'lesson-plan' | 'certificate' | 'other';
  description?: string;
  fileUrl: string;
  uploadDate: string;
  category: string;
  tags?: string[];
}

export interface Portfolio {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    registryId?: string;
  };
  summary: string;
  education: Education[];
  experience: Experience[];
  certificates: Certificate[];
  activities: Activity[];
  documents: Document[];
}