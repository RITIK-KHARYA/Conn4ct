import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { AgenticOSSection } from "@/components/landing/agentic-os-section";
import { FAQSection } from "@/components/landing/faq-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Trusted By Section (Simplified) */}
        <section className="py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="container mx-auto px-4">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground text-center mb-12 opacity-50">
              Trusted by creators at top companies
            </p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-30 grayscale contrast-150 font-black text-2xl tracking-tighter">
              <span>META</span>
              <span>VERCEL</span>
              <span>GITHUB</span>
              <span>STRIPE</span>
              <span>GOOGLE</span>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <AgenticOSSection />
        <FAQSection />
        
        {/* Final CTA Section - TensorStax Style */}
        <section className="py-40 relative overflow-hidden border-t border-white/5">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-[100px] font-bold leading-none tracking-tighter mb-12 uppercase italic">
              Autonomous social <br /> systems for teams
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-16 px-12 rounded-2xl bg-white text-black hover:bg-white/90 font-black text-xl group transition-all"
              >
                <Link href="/home" className="flex items-center gap-2">
                  Request a demo
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-20 pt-20 border-t border-white/5 max-w-lg mx-auto">
              <p className="text-muted-foreground font-medium mb-8">
                Sign up to stay up to date with all the latest development with Conn4ct
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus:outline-none focus:border-primary transition-colors"
                />
                <Button className="rounded-xl font-bold bg-white text-black hover:bg-white/90">Join</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - TensorStax Style */}
      <footer className="py-24 bg-black/40 backdrop-blur-md border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center tech-glow-primary transition-transform group-hover:rotate-12">
                  <span className="text-white font-black text-xl">C</span>
                </div>
                <span className="text-2xl font-black tracking-tighter text-foreground uppercase">Conn4ct</span>
              </Link>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6 opacity-50">Discover</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6 opacity-50">Contact</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                <li><Link href="mailto:info@conn4ct.com" className="hover:text-primary transition-colors">info@conn4ct.com</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6 opacity-50">Legals</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
            <div className="flex gap-8">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors uppercase font-black text-[10px] tracking-widest opacity-40 hover:opacity-100">Twitter (X)</Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors uppercase font-black text-[10px] tracking-widest opacity-40 hover:opacity-100">LinkedIn</Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors uppercase font-black text-[10px] tracking-widest opacity-40 hover:opacity-100">Youtube</Link>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-40">
              conn4ct ©2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
