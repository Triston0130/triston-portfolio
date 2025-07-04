# Triston Miller - Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring document management, interactive sections, and professional presentation.

## 🌟 Features

### Professional Portfolio Features
- **Hero Section** - Professional introduction with contact information
- **Education Timeline** - Detailed educational background with honors and coursework
- **Experience Showcase** - Comprehensive work history with achievements
- **Document Management** - Upload, organize, and share documents (assignments, papers, presentations)
- **Certificates & Activities** - Professional certifications and extracurricular activities
- **Contact Form** - Integrated contact system with social links

### Modern Web Features
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Toggle between themes
- **Interactive Animations** - Smooth transitions and hover effects
- **Document Upload** - Drag & drop file uploads with categorization
- **Search & Filter** - Find documents and content quickly
- **SEO Optimized** - Professional metadata and social sharing
- **Fast Performance** - Optimized with Next.js and modern best practices

## 🚀 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **File Handling**: React Dropzone
- **Build Tool**: Turbopack (Next.js)

## 📋 Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

## 🛠️ Installation & Setup

1. **Clone or navigate to the project**:
   ```bash
   cd triston-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
triston-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Education, etc.)
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and data
│   ├── portfolio-data.ts # Portfolio content
│   └── utils.ts          # Helper functions
├── types/                # TypeScript type definitions
├── public/               # Static assets
│   └── documents/        # Document storage
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Updating Personal Information
Edit `/lib/portfolio-data.ts` to update:
- Personal details
- Education history
- Work experience
- Certificates
- Activities

### Adding Documents
- Use the document upload feature on the website
- Or manually add files to `/public/documents/`
- Update the documents array in `portfolio-data.ts`

### Styling Changes
- Modify Tailwind classes in components
- Update global styles in `/app/globals.css`
- Customize color scheme in `tailwind.config.ts`

## 📱 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo
- **GitHub Pages**: Use `npm run build` and deploy `/out` folder
- **AWS/Azure**: Deploy as static site

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript checks
```

## 📊 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Automatic image optimization
- **Bundle Splitting**: Efficient code splitting
- **SEO Optimization**: Meta tags and structured data

## 🎯 Key Sections

1. **Hero Section**: Professional introduction and contact info
2. **Education**: Academic timeline with achievements
3. **Experience**: Work history with detailed responsibilities
4. **Achievements**: Certificates and activities
5. **Documents**: Upload and organize portfolio materials
6. **Contact**: Professional contact form and social links

## 🔒 Security Features

- File type validation for uploads
- No sensitive data exposure
- Client-side file handling
- Secure contact form integration

## 📞 Support & Contact

For questions about the website or portfolio:
- **Email**: tristonmiller@csus.edu
- **Phone**: (707) 297-1831
- **LinkedIn**: [Triston Miller](https://www.linkedin.com/in/triston-miller-543847206/)

## 🎓 About Triston Miller

Early Childhood Education Professional with extensive experience in:
- Child development (ages 2-5)
- Educational leadership
- Curriculum development
- Student mentoring and tutoring
- Professional development and training

Currently pursuing B.A. in Child & Adolescent Development at California State University, Sacramento.

---

Built with ❤️ for education and professional growth.