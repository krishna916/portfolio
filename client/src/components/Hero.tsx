export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center w-full hero-gradient pt-32 relative">
      <div className="px-gutter max-w-container-max mx-auto w-full flex flex-col items-start">
        <div className="space-y-stack-sm max-w-4xl">
          <span className="font-label-code text-secondary tracking-widest block uppercase mb-4 opacity-80">Senior Software Engineer</span>
          <h1 className="font-display text-headline-lg-mobile md:text-display text-on-surface mb-6 leading-tight">
            Building Reliable Backend Systems <span className="text-secondary text-glow">that Scale.</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Senior Software Engineer with 7+ years of experience building scalable Java backend systems across fintech and SaaS. Passionate about performance optimization, distributed systems, API design, cloud technologies, and modern engineering practices.
          </p>
          <div className="pt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-on-surface-variant font-label-code text-sm">
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>location_on</span> Ahmedabad, India
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-code text-sm">
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>mail</span> krishna916@outlook.com
            </div>
          </div>
        </div>
        {/* Atmospheric Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
          <span className="font-label-code text-[10px] mb-2 uppercase tracking-[0.3em]">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
