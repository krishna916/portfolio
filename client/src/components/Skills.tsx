export default function Skills() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto scroll-reveal" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12">
        <div className="md:col-span-4">
          <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">03 // Technical Stack</h2>
        </div>
        <div className="md:col-span-8">
          <h3 className="font-display text-headline-lg text-on-surface">Modern Engineering Toolkit</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Languages */}
        <div className="bg-surface-container p-gutter border border-outline-variant/20 hover:border-secondary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">code</span>
            <h3 className="font-headline-md text-on-surface text-lg">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Java</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">SQL</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">JavaScript</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">TypeScript</span>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-surface-container p-gutter border border-outline-variant/20 hover:border-secondary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">settings_ethernet</span>
            <h3 className="font-headline-md text-on-surface text-lg">Backend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Spring Boot</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Spring Data JPA</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Hibernate</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">REST APIs</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="bg-surface-container p-gutter border border-outline-variant/20 hover:border-secondary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">web</span>
            <h3 className="font-headline-md text-on-surface text-lg">Frontend</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">React</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Angular</span>
          </div>
        </div>

        {/* Data */}
        <div className="bg-surface-container p-gutter border border-outline-variant/20 hover:border-secondary/30 transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">database</span>
            <h3 className="font-headline-md text-on-surface text-lg">Data</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">MySQL</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">PostgreSQL</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Redis</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Elasticsearch</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">MongoDB</span>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="bg-surface-container p-gutter border border-outline-variant/20 hover:border-secondary/30 transition-colors md:col-span-2 lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-secondary">cloud</span>
            <h3 className="font-headline-md text-on-surface text-lg">Cloud &amp; DevOps</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">AWS</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Docker</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Git</span>
            <span className="px-3 py-1 bg-surface-variant/40 border border-outline-variant font-label-code text-on-surface">Maven</span>
          </div>
        </div>
      </div>
    </section>
  );
}
