export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-24 px-gutter" id="contact">
      <div className="max-w-container-max mx-auto text-center space-y-12">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="font-display text-headline-lg text-on-surface">Always learning. Always building.</h2>
          <p className="font-body-md text-on-surface-variant opacity-80">
            I enjoy discussing software architecture, engineering practices, distributed systems, and building products that scale.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <a className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors font-body-md" href="mailto:krishna916@outlook.com">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">alternate_email</span>
            Email
          </a>
          <a className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors font-body-md" href="https://linkedin.com/in/krishnamurti-pandaram" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">link</span>
            LinkedIn
          </a>
          <a className="group flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors font-body-md" href="https://github.com/krishna916" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">terminal</span>
            GitHub
          </a>
        </div>

        <div className="pt-16 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-stack-sm">
          <p className="font-body-md text-on-surface-variant text-sm opacity-60 md:text-left">
            © 2026 Krishnamurti Pandaram. Building software that is simple, reliable, and scalable.
          </p>
          <div className="font-label-code text-[14px] text-secondary uppercase tracking-widest">
            Stack : Java • Spring • React • AWS
          </div>
        </div>
      </div>
    </footer>
  );
}
