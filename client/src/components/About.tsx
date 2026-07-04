export default function About() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto scroll-reveal" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-4">
          <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest sticky top-24">01 // Engineering Focus</h2>
        </div>
        <div className="md:col-span-8">
          <p className="font-body-lg text-on-surface mb-8 leading-relaxed">
            I specialize in designing and implementing high-performance backend architectures that power complex enterprise applications. My approach combines rigorous system design with a focus on maintainability and operational excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-on-surface-variant">
            <div className="space-y-2">
              <h4 className="font-bold text-secondary uppercase text-[12px] tracking-widest">Core Expertise</h4>
              <ul className="font-body-md space-y-1">
                <li>• Backend Engineering</li>
                <li>• Performance Optimization</li>
                <li>• Application Modernization</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-secondary uppercase text-[12px] tracking-widest">Strategic Skills</h4>
              <ul className="font-body-md space-y-1">
                <li>• Distributed Systems</li>
                <li>• System Design</li>
                <li>• Technical Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
