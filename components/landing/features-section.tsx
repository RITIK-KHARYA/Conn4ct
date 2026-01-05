"use client";

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-4">
        {/* Step 01 */}
        <div className="flex flex-col md:flex-row gap-12 mb-40 items-start">
          <div className="flex-1 space-y-6">
            <span className="text-primary font-black text-6xl opacity-20 tracking-tighter">01.</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
              Describe who you want <br className="hidden lg:block" /> to connect with
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-xl">
              Express your intent. Whether it&apos;s finding co-founders, hiring elite talent, 
              or building a squad for your next project. Our agents process 
              the context from your existing profile and goals.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="h-px w-12 bg-white/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Contextual Awareness</span>
            </div>
          </div>
          <div className="flex-1 w-full aspect-video tech-card rounded-[2.5rem] border-white/5 bg-white/[0.02] p-8 flex flex-col justify-center gap-4">
             <div className="space-y-2 opacity-50">
                <div className="h-4 w-3/4 bg-white/10 rounded-full" />
                <div className="h-4 w-1/2 bg-white/10 rounded-full" />
             </div>
             <div className="tech-card border-primary/20 bg-primary/5 p-6 rounded-2xl">
                <p className="text-primary font-bold text-sm">&quot;Find me 3 senior engineers specialized in Rust and Distributed Systems in Berlin...&quot;</p>
             </div>
          </div>
        </div>

        {/* Step 02 */}
        <div className="flex flex-col md:flex-row-reverse gap-12 mb-40 items-start">
          <div className="flex-1 space-y-6">
            <span className="text-primary font-black text-6xl opacity-20 tracking-tighter">02.</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
              Conn4ct <br className="hidden lg:block" /> plans it
            </h2>
            <p className="text-xl text-muted-foreground font-medium max-w-xl">
              TensorStax generates a structured growth plan tailored to your network, 
              skills, and the custom rules you&apos;ve defined for your professional brand.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="h-px w-12 bg-white/10" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Autonomous Planning</span>
            </div>
          </div>
          <div className="flex-1 w-full aspect-video tech-card rounded-[2.5rem] border-white/5 bg-white/2 p-8 space-y-4">
             <div className="flex items-center gap-2 text-xs font-black text-primary/60 uppercase tracking-widest">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Planning Sequence
             </div>
             <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 flex-1 bg-white/10 rounded-full" />
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Step 03 */}
        <div className="text-center space-y-12">
          <div className="space-y-6 max-w-4xl mx-auto">
            <span className="text-primary font-black text-6xl opacity-20 tracking-tighter">03.</span>
            <h2 className="text-5xl md:text-6xl lg:text-[80px] font-black tracking-tighter leading-none uppercase italic">
              Network generated <br /> in seconds
            </h2>
            <p className="text-2xl text-muted-foreground font-medium italic">
              Automated reachout, relationship nurturing, and opportunity matching.
            </p>
          </div>
          <div className="tech-card rounded-[3rem] border-white/5 bg-white/1 p-12 max-w-5xl mx-auto">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 contrast-150">
                {['PIPELINES', 'TRANSFORMS', 'AGENTS', 'SCHEMA'].map(t => (
                  <div key={t} className="text-2xl font-black tracking-tighter">{t}</div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
