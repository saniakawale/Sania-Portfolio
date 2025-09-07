import { Mail } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 fade-in" data-testid="contact-title">I'd love to connect!</h2>
        <p className="text-lg text-muted-foreground mb-12 fade-in stagger-1" data-testid="contact-description">
          Whether you're interested in AI/ML projects, web development, or just want to chat about technology, feel free to reach out.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in stagger-2">
          <a 
            href="mailto:sania@terpmail.umd.edu" 
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all hover-lift flex items-center gap-3"
            data-testid="contact-email"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
          <a 
            href="https://www.linkedin.com/in/saniakawale" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent transition-all hover-lift flex items-center gap-3"
            data-testid="contact-linkedin"
          >
            <SiLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border fade-in stagger-3">
          <p className="text-muted-foreground" data-testid="copyright">© 2024 Sania Kawale. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
