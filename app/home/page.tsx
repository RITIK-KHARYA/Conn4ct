import { Sidebar } from "@/components/layout/sidebar";
import { FeedSidebar } from "@/components/layout/feed-sidebar";
import { PostComposer } from "@/components/post/post-composer";
import { PostCard } from "@/components/post/post-card";

// Mock data - will be replaced with actual data fetching
const mockPosts = [
  {
    id: 1,
    author: {
      name: "John Doe",
      username: "@johndoe",
    },
    content: "Just shipped a new feature! 🚀 Excited to see what the community thinks.",
    likes: 42,
    comments: 12,
    retweets: 8,
    timestamp: "2h",
  },
  {
    id: 2,
    author: {
      name: "Jane Smith",
      username: "@janesmith",
    },
    content: "The future of web development is looking bright. Here's why:\n\n• Better tooling\n• Improved DX\n• More accessibility\n\nWhat are your thoughts?",
    likes: 128,
    comments: 45,
    retweets: 23,
    timestamp: "5h",
  },
  {
    id: 3,
    author: {
      name: "Tech Guru",
      username: "@techguru",
    },
    content: "Just discovered an amazing new library that's going to change how we build UIs. Check it out!",
    media: ["https://via.placeholder.com/600x400"],
    likes: 89,
    comments: 34,
    retweets: 15,
    timestamp: "8h",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <div className="flex max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        {/* Left Sidebar */}
        <div className="sticky top-0 h-screen py-10 flex">
          <Sidebar />
        </div>

        {/* Main Feed */}
        <main className="flex-1 min-w-0 border-x border-white/5 min-h-screen">
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-white/5 px-8 py-6 flex items-center justify-between">
            <h1 className="text-sm font-black tracking-[0.3em] uppercase opacity-40 italic">System / Feed</h1>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white opacity-40 italic">Live Stream</span>
            </div>
          </div>

          {/* Post Composer */}
          <div className="p-8 border-b border-white/5 bg-white/[0.01]">
            <PostComposer />
          </div>

          {/* Feed */}
          <div className="divide-y divide-white/5">
            {mockPosts.map((post) => (
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

