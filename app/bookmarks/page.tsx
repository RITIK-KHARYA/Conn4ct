import { Sidebar } from "@/components/layout/sidebar";
import { FeedSidebar } from "@/components/layout/feed-sidebar";
import { PostCard } from "@/components/post/post-card";
import { Bookmark } from "lucide-react";

const bookmarkedPosts = [
  {
    id: 1,
    author: {
      name: "Tech Guru",
      username: "@techguru",
    },
    content: "The future of web development is looking bright. Here's why:\n\n• Better tooling\n• Improved DX\n• More accessibility\n\nWhat are your thoughts?",
    likes: 128,
    comments: 45,
    retweets: 23,
    timestamp: "2d",
    bookmarkedAt: "1d ago",
  },
  {
    id: 2,
    author: {
      name: "Design Studio",
      username: "@designstudio",
    },
    content: "Just released our new design system! Built with accessibility and performance in mind. Open source and ready to use.",
    likes: 1245,
    comments: 234,
    retweets: 567,
    timestamp: "3d",
    bookmarkedAt: "2d ago",
  },
  {
    id: 3,
    author: {
      name: "AI Research Lab",
      username: "@airesearch",
    },
    content: "New breakthrough in autonomous agent systems. Our latest model can now handle complex multi-step workflows with 95% accuracy.",
    media: ["https://via.placeholder.com/600x400"],
    likes: 3421,
    comments: 892,
    retweets: 1234,
    timestamp: "5d",
    bookmarkedAt: "3d ago",
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
    timestamp: "1w",
    bookmarkedAt: "5d ago",
  },
];

export default function BookmarksPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <div className="flex max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        {/* Left Sidebar */}
        <div className="sticky top-0 h-screen py-10 flex">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 border-x border-white/5 min-h-screen">
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-white/5 px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Bookmark className="h-5 w-5 text-primary" />
              <h1 className="text-sm font-black tracking-[0.3em] uppercase opacity-40 italic">System / Bookmarks</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white opacity-40 italic">
                {bookmarkedPosts.length} Saved
              </span>
            </div>
          </div>

          {/* Bookmarks List */}
          <div className="divide-y divide-white/5">
            {bookmarkedPosts.map((post) => (
              <div key={post.id} className="relative">
                <div className="absolute top-8 right-8 z-10">
                  <div className="h-6 w-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Bookmark className="h-3.5 w-3.5 text-primary fill-primary" />
                  </div>
                </div>
                <div className="px-8 pt-6 pb-2">
                  <div className="text-[9px] uppercase tracking-widest font-black text-white opacity-20 mb-4">
                    Saved {post.bookmarkedAt}
                  </div>
                </div>
                <PostCard {...post} />
              </div>
            ))}
          </div>

          {bookmarkedPosts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32 px-8">
              <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6">
                <Bookmark className="h-8 w-8 text-white/20" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-2 text-white">No Bookmarks Yet</h3>
              <p className="text-sm text-white/40 font-medium text-center max-w-md">
                Save posts you want to revisit later by clicking the bookmark icon.
              </p>
            </div>
          )}
        </main>

        {/* Right Sidebar */}
        <div className="sticky top-0 h-screen py-10">
          <FeedSidebar />
        </div>
      </div>
    </div>
  );
}

