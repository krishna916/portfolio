export default function Certifications() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto scroll-reveal" id="certifications">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Certs */}
        <div className="space-y-8">
          <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">04 // Certifications</h2>
          <a href="https://www.credly.com/badges/826183d2-4b0b-428f-a305-be0cfb91dda6/public_url" target="_blank" rel="noreferrer" className="block group relative bg-surface-container-low p-8 border-l-4 border-secondary overflow-hidden hover:bg-surface-container transition-colors cursor-pointer">
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h3 className="font-headline-md text-on-surface mb-2">AWS Certified Solutions Architect</h3>
                <p className="font-body-md text-on-surface-variant italic">Associate (SAA-03 2026)</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/assets/saa-c03-badge.png" alt="AWS Certified Solutions Architect Badge" className="w-20 h-20 object-contain drop-shadow-lg" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 material-symbols-outlined text-[120px] text-surface-variant/20 rotate-12 select-none pointer-events-none">cloud_done</div>
          </a>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">05 // Education</h2>
          <div className="group relative bg-surface-container-low p-8 border-l-4 border-tertiary overflow-hidden hover:bg-surface-container transition-colors">
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h3 className="font-headline-md text-on-surface mb-2">Bachelor of Engineering</h3>
                <p className="font-body-md text-on-surface-variant">Universal College of Engineering &amp; Technology | 2016</p>
                <p className="font-label-code text-tertiary mt-2 text-sm">Computer Engineering</p>
              </div>
              <span className="material-symbols-outlined text-tertiary text-[48px] opacity-40">school</span>
            </div>
            <div className="absolute -bottom-4 -right-4 material-symbols-outlined text-[120px] text-surface-variant/20 rotate-12 select-none pointer-events-none">history_edu</div>
          </div>
        </div>
      </div>
    </section>
  );
}
