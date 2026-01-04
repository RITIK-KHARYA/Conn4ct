"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, MessageSquare, Heart } from "lucide-react";

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Active Users",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    value: 50000,
    suffix: "+",
    label: "Posts Shared",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    value: 1000000,
    suffix: "+",
    label: "Likes Given",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Satisfaction Rate",
    color: "from-green-500 to-emerald-500",
  },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return { count, ref };
}

export function StatsSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter">
            Join a Growing{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light tracking-tight">
            See what our community of builders and creators has achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000);
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                ref={ref}
                className="group text-center p-10 rounded-[2.5rem] tech-card transition-all duration-500 hover:-translate-y-2 border-white/5 hover:border-primary/20 hover:shadow-[0_20px_50px_-10px_rgba(var(--primary),0.1)]"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl sm:text-6xl font-black mb-3 tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {count.toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-bold uppercase tracking-widest opacity-60">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

