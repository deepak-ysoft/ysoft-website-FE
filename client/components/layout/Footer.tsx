import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

type FooterProps = {
  className?: string;
};

const Footer = ({ className = "" }: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t ${className}`}>
      <div className="container max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-sm text-muted-foreground mt-3">
            Modern software solutions for ambitious teams.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              aria-label="LinkedIn"
              href="#"
              className="border rounded-full w-9 h-9 flex items-center justify-center hover:bg-accent"
            >
              <Linkedin size={18} />
            </a>
            <a
              aria-label="Twitter"
              href="#"
              className="border rounded-full w-9 h-9 flex items-center justify-center hover:bg-accent"
            >
              <Twitter size={18} />
            </a>
            <a
              aria-label="GitHub"
              href="#"
              className="border rounded-full w-9 h-9 flex items-center justify-center hover:bg-accent"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#home" className="hover:text-foreground">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-foreground">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-foreground">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-foreground">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-foreground">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Web Development</li>
            <li>Mobile Applications</li>
            <li>Custom Software</li>
            <li>UI/UX Design</li>
            <li>E-Commerce</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2">
              <Phone size={16} /> +91 00000 00000
            </li>
            <li className="inline-flex items-center gap-2">
              <Mail size={16} /> contact@ysoftsolution.com
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin size={16} /> India
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container max-w-7xl mx-auto px-4 py-6 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {year} YSoft Solution. All rights reserved.</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-primary">
            Get in touch <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

