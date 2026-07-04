export default function Experience() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto scroll-reveal" id="experience">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
        <div className="md:col-span-4">
          <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">02 // Experience</h2>
        </div>
        <div className="md:col-span-8">
          <h3 className="font-display text-headline-lg text-on-surface mb-4">Engineering Career Path</h3>
        </div>
      </div>

      <div className="space-y-content-gap">
        {/* Role 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter group hover:bg-surface-container/30 transition-colors p-4 -mx-4">
          <div className="md:col-span-4">
            <span className="font-label-code text-on-surface-variant opacity-60">May 2021 – Present</span>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-col gap-2 mb-6">
              <h4 className="font-headline-md text-on-surface">Senior Software Scientist</h4>
              <span className="font-body-md text-secondary">Brevitaz Systems Pvt. Ltd.</span>
            </div>
            <ul className="space-y-6 font-body-md text-on-surface-variant">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-1">star</span>
                <span>Owned technical initiatives within the Administration team of a large sales enablement platform, progressing from a Full-Stack Engineer to a Senior Software Scientist.</span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-1">analytics</span>
                <span><span className="metric-highlight">Reduced critical calculation latency from 3–5 minutes to milliseconds</span> through algorithm optimization and strategic graph-based redesign.</span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-1">search</span>
                <span><span className="metric-highlight">Improved enterprise search performance from 10 seconds to under 1 second</span> using Redis caching and Elasticsearch for high-frequency admin workflows.</span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-1">auto_awesome</span>
                <span>Integrated <span className="metric-highlight">LLM-powered features</span> for enterprise content automation, including AI-assisted tagging and structured script generation for sales enablement.</span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-1">sync_alt</span>
                <span>Modernized legacy JSP/jQuery modules into React while evolving Spring Boot APIs to support modern frontend requirements.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="experience-rule"></div>

        {/* Role 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter group hover:bg-surface-container/30 transition-colors p-4 -mx-4">
          <div className="md:col-span-4">
            <span className="font-label-code text-on-surface-variant opacity-60">Jan 2019 – May 2021</span>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-col gap-2 mb-6">
              <h4 className="font-headline-md text-on-surface">Java Developer</h4>
              <span className="font-body-md text-secondary">Shrine Software Services Pvt. Ltd.</span>
            </div>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-1">lock</span>
                <span>Developed Spring Boot microservices supporting OAuth-based banking integrations for enterprise fintech applications.</span>
              </li>
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-1">dashboard</span>
                <span>Enhanced multi-tenant finance and analytics modules using Angular and MongoDB, improving data isolation and reporting speed.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
