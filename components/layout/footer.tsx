import Link from "next/link"
import { Mail, Phone, Linkedin, Heart } from "lucide-react"

interface FooterProps {
  personalInfo: {
    name: string
    email: string
    phone: string
    linkedin?: string
  }
}

export function Footer({ personalInfo }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground">
              Early Childhood Education Professional dedicated to fostering young minds
              and creating engaging learning environments.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="#home" className="block text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="#education" className="block text-sm text-muted-foreground hover:text-primary">
                Education
              </Link>
              <Link href="#experience" className="block text-sm text-muted-foreground hover:text-primary">
                Experience
              </Link>
              <Link href="#documents" className="block text-sm text-muted-foreground hover:text-primary">
                Documents
              </Link>
              <Link href="#contact" className="block text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <Link 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Mail className="w-4 h-4" />
                Email
              </Link>
              <Link 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="w-4 h-4" />
                Phone
              </Link>
              {personalInfo.linkedin && (
                <Link 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} {personalInfo.name}. Made with{" "}
            <Heart className="w-4 h-4 text-red-500" /> for education.
          </p>
        </div>
      </div>
    </footer>
  )
}