"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingTopics = [
  { tag: "WebDev", posts: "12.5K" },
  { tag: "Design", posts: "8.2K" },
  { tag: "Tech", posts: "15.3K" },
  { tag: "Startup", posts: "5.7K" },
  { tag: "AI", posts: "22.1K" },
];

const suggestedUsers = [
  { name: "John Doe", username: "@johndoe", followers: "12K" },
  { name: "Jane Smith", username: "@janesmith", followers: "8K" },
  { name: "Tech Guru", username: "@techguru", followers: "25K" },
];

export function FeedSidebar() {
  return (
    <aside className="hidden xl:block w-80 h-full">
      <div className="flex flex-col space-y-10 h-full">
        {/* Search Bar */}
        <div className="relative group">
          <input
            type="text"
            placeholder="Search network..."
            className="w-full bg-white/[0.02] border border-white/5 rounded-xl py-3 px-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-primary/30 focus:bg-white/[0.04] transition-all placeholder:opacity-30"
          />
        </div>

        {/* Trending Topics */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black tracking-widest text-[10px] uppercase text-white/40">Trending</h3>
            <div className="h-1 w-1 rounded-full bg-primary" />
          </div>
          <div className="space-y-px rounded-2xl overflow-hidden border border-white/5">
            {trendingTopics.map((topic) => (
              <div
                key={topic.tag}
                className="flex items-center justify-between group cursor-pointer bg-white/[0.01] hover:bg-white/[0.03] p-4 transition-all duration-200 border-b border-white/5 last:border-0"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-xs uppercase tracking-tight group-hover:text-primary transition-colors">#{topic.tag}</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-black opacity-30">
                    {topic.posts} Units
                  </span>
                </div>
                <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
              </div>
            ))}
          </div>
        </div>

        {/* Who to Follow */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black tracking-widest text-[10px] uppercase text-white/40">Suggested</h3>
            <div className="h-1 w-1 rounded-full bg-secondary" />
          </div>
          <div className="space-y-4">
            {suggestedUsers.map((user) => (
              <div
                key={user.username}
                className="flex items-center justify-between group bg-white/[0.01] border border-white/5 rounded-2xl p-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white font-black text-[10px]">
                    {user.name[0]}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="font-bold text-xs truncate tracking-tight uppercase">{user.name}</div>
                    <div className="text-[9px] text-muted-foreground truncate opacity-40 font-black uppercase tracking-widest">
                      {user.username}
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="rounded-lg h-7 px-3 text-[9px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all border border-white/5"
                >
                  Link
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-2 pt-10 mt-auto border-t border-white/5 space-y-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-20">
            <a href="#" className="hover:text-primary transition-colors">Term</a>
            <a href="#" className="hover:text-primary transition-colors">Priv</a>
            <a href="#" className="hover:text-primary transition-colors">Auth</a>
          </div>
          <div className="text-[9px] font-black tracking-widest text-muted-foreground opacity-10 uppercase">
            System v1.0.4 // Conn4ct
          </div>
        </div>
      </div>
    </aside>
  );
}

