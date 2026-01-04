"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { FeedSidebar } from "@/components/layout/feed-sidebar";
import { PostCard } from "@/components/post/post-card";
import { Search, TrendingUp, Hash } from "lucide-react";
import { useState } from "react";

const trendingTopics = [
  { tag: "WebDev", posts: "12.5K", trending: true },
  { tag: "Design", posts: "8.2K", trending: false },
  { tag: "Tech", posts: "15.3K", trending: true },
  { tag: "Startup", posts: "5.7K", trending: false },
  { tag: "AI", posts: "22.1K", trending: true },
  { tag: "OpenSource", posts: "9.3K", trending: false },
];

const explorePosts = [
  {
    id: 1,
    author: {
      name: "Design Studio",
      username: "@designstudio",
    },
    content: "Just released our new design system! Built with accessibility and performance in mind. Open source and ready to use.",
    likes: 1245,
    comments: 234,
    retweets: 567,
    timestamp: "1h",
  },
  {
    id: 2,
    author: {
      name: "AI Research Lab",
      username: "@airesearch",
    },
    content: "New breakthrough in autonomous agent systems. Our latest model can now handle complex multi-step workflows with 95% accuracy.",
    media: ["https://via.placeholder.com/600x400"],
    likes: 3421,
    comments: 892,
    retweets: 1234,
    timestamp: "3h",
  },
  {
    id: 3,
    author: {
      name: "Tech Startup",
      username: "@techstartup",
    },
    content: "We're hiring! Looking for senior engineers who are passionate about building the future of social infrastructure.\n\nRemote-friendly, competitive equity, and amazing team culture.",
    likes: 892,
    comments: 156,
    retweets: 234,
    timestamp: "5h",
  },
  {
    id: 4,
    author: {
      name: "Open Source Dev",
      username: "@opensourcedev",
    },
    content: "Just hit 10K stars on GitHub! 🎉\n\nThank you to everyone who contributed, reported issues, and helped make this project what it is today.",
    likes: 2341,
    comments: 567,
    retweets: 890,
    timestamp: "8h",
  },
];

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <div className="flex max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        {/* Left Sidebar */}
        <div className="sticky top-0 h-screen py-10 flex">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 border-x border-white/5 min-h-screen">
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-white/5 px-8 py-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-sm font-black tracking-[0.3em] uppercase opacity-40 italic">System / Explore</h1>
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-white/20" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search network, topics, users..."
                className="w-full bg-white/[0.01] border border-white/5 rounded-xl py-4 pl-11 pr-4 text-sm font-medium text-white placeholder:text-white/20 focus:outline-none focus:border-primary/30 focus:bg-white/[0.02] transition-all uppercase tracking-widest text-[10px]"
              />
            </div>

            {/* Trending Topics */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-40">Trending Topics</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {trendingTopics.map((topic) => (
                  <div
                    key={topic.tag}
                    className={topic.trending 
                      ? "p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors cursor-pointer group"
                      : "p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group"
                    }
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Hash className={topic.trending ? "h-4 w-4 text-primary" : "h-4 w-4 text-white/20"} />
                      {topic.trending && (
                        <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                    <div className="font-bold text-sm text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                      {topic.tag}
                    </div>
                    <div className="text-[9px] uppercase tracking-widest font-black text-white opacity-20 mt-1">
                      {topic.posts} Units
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Explore Feed */}
          <div className="divide-y divide-white/5">
            {explorePosts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <div className="sticky top-0 h-screen py-10">
          <FeedSidebar />
        </div>
      </div>
    </div>
  );
}

