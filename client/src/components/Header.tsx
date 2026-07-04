export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="flex justify-between items-center h-16 w-full px-gutter max-w-container-max mx-auto">
        <a href="https://krishnamurti.dev" className="font-display text-headline-md tracking-tighter text-on-surface hover:text-secondary transition-colors">Krishnamurti Pandaram</a>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-caps text-label-caps" href="#experience">Experience</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-caps text-label-caps" href="#skills">Skills</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-caps text-label-caps" href="#certifications">Certifications</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-label-caps text-label-caps" href="#contact">Contact</a>
        </nav>
        <a href="/resume/Krishnamurti Pandaram - Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-secondary text-on-secondary px-6 py-2 font-label-caps text-label-caps cursor-pointer active:scale-95 transition-all duration-200">
          View Resume
        </a>
      </div>
    </header>
  );
}
