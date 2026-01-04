"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] aspect-square bg-primary/10 blur-[160px] rounded-full -z-10 opacity-50" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Main Headline - Extra Bold & Large like TensorStax */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold leading-[1.05] tracking-tight mb-8">
          Social infrastructure <br className="hidden md:block" />
          <span className="text-white/40">that builds itself</span>
        </h1>

        {/* Subheadline - Clean and weighted */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          Designed for creators, our platform leverages autonomous agents to 
          plan, grow, and maintain your professional presence, 
          seamlessly integrating with your existing network.
        </p>

        {/* CTA Buttons - TensorStax Style */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="h-14 px-8 rounded-xl bg-white text-black hover:bg-white/90 font-bold text-lg group transition-all"
          >
            <Link href="/home" className="flex items-center gap-2">
              Join Waitlist
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 px-8 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg group transition-all"
          >
            <Link href="/home" className="flex items-center gap-2">
              Book a demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Integration Badges - Mocking TensorStax's "Active Integrations" */}
        <div className="mt-24 pt-12 border-t border-white/5 max-w-4xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-8 opacity-50">
            Active Ecosystem Integrations
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale contrast-125">
            <div className="flex items-center gap-2 font-black text-xl tracking-tighter">GITHUB</div>
            <div className="flex items-center gap-2 font-black text-xl tracking-tighter">LINKEDIN</div>
            <div className="flex items-center gap-2 font-black text-xl tracking-tighter">PRODUCTHUNT</div>
            <div className="flex items-center gap-2 font-black text-xl tracking-tighter">TWITTER</div>
            <div className="flex items-center gap-2 font-black text-xl tracking-tighter">X</div>
          </div>
        </div>
      </div>
    </section>
  );
}
