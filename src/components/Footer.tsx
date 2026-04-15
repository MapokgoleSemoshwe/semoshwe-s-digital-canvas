import { LinkedinIcon, GithubIcon } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t">
    <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
      <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Semoshwe Mapokgole</p>
      <div className="flex gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
