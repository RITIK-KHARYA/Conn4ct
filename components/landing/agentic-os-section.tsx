"use client";

import { Shield, Zap, RefreshCw, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Self-healing Networks",
    description: "Detects dead-end connections, suggests high-value alternatives, and automatically maintains relationship health.",
    icon: RefreshCw,
  },
  {
    title: "On-demand Pipelines",
    description: "Generate tailored reachout sequences and relationship workflows on your own infrastructure.",
    icon: Zap,
  },
  {
    title: "Agentic Nurturing",
    description: "Autonomous agents handle the initial friction of professional networking, so you only join when it's high value.",
    icon: Layers,
  },
  {
    title: "Trust & Observability",
    description: "Manage your professional brand across all platforms in one centralized, agent-powered location.",
    icon: Shield,
  },
];

export function AgenticOSSection() {
  return (
    <section className="py-40 bg-white/[0.01] border-y border-white/5">
      <div className="container mx-auto px-4 text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
          The agentic <br /> Social OS
        </h2>
        <p className="text-xl text-muted-foreground font-medium uppercase tracking-[0.2em] opacity-50">
          Your Network, Supercharged
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
        {features.map((f, i) => (
          <div key={i} className="p-10 bg-background hover:bg-white/[0.02] transition-colors group">
            <div className="mb-8 p-3 rounded-xl bg-primary/5 border border-primary/10 inline-flex group-hover:scale-110 transition-transform">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{f.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-medium">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

