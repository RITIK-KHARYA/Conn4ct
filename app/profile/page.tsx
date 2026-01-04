import { Sidebar } from "@/components/layout/sidebar";
import { FeedSidebar } from "@/components/layout/feed-sidebar";
import { PostCard } from "@/components/post/post-card";
import { Button } from "@/components/ui/button";
import { Settings, MapPin, Link as LinkIcon, Calendar, Users, MessageSquare, Heart } from "lucide-react";

const userProfile = {
  name: "Username",
  username: "@user_handle",
  bio: "Building the future of professional networking. Creator, developer, and open-source enthusiast.",
  location: "San Francisco, CA",
  website: "https://username.dev",
  joined: "January 2023",
  stats: {
    posts: 1247,
    followers: 12500,
    following: 342,
    likes: 89420,
  },
};

const userPosts = [
  {
    id: 1,
    author: {
      name: "Username",
      username: "@user_handle",
    },
    content: "Just launched a new open-source project! 🚀\n\nBuilt with Next.js, TypeScript, and Tailwind. Check it out and let me know what you think!",
    likes: 342,
    comments: 89,
    retweets: 156,
    timestamp: "2h",
  },
  {
    id: 2,
    author: {
      name: "Username",
      username: "@user_handle",
    },
    content: "Excited to announce that I'll be speaking at the upcoming tech conference! Will be sharing insights on building scalable social infrastructure.",
    likes: 521,
    comments: 123,
    retweets: 234,
    timestamp: "1d",
  },
  {
    id: 3,
    author: {
      name: "Username",
      username: "@user_handle",
    },
    content: "The future of professional networking is autonomous. Our agents handle the initial friction, so you only connect when it's high value.",
    media: ["https://via.placeholder.com/600x400"],
    likes: 892,
    comments: 234,
    retweets: 567,
    timestamp: "3d",
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      <div className="flex max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 gap-12">
        {/* Left Sidebar */}
        <div className="sticky top-0 h-screen py-10 flex">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 border-x border-white/5 min-h-screen">
          {/* Profile Header */}
          <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-white/5 px-8 py-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-sm font-black tracking-[0.3em] uppercase opacity-40 italic">System / Profile</h1>
              <Button
                variant="ghost"
                size="sm"
                className="h-9 px-4 rounded-lg text-white/40 hover:text-white hover:bg-white/5 uppercase text-[10px] font-black tracking-widest"
              >
                <Settings className="h-4 w-4 mr-2" />
                Config
              </Button>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <div className="h-24 w-24 rounded-2xl bg-white/5 flex items-center justify-center text-white font-black text-3xl border border-white/5">
                  {userProfile.name[0]}
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl font-black tracking-tighter uppercase mb-1">{userProfile.name}</h2>
                    <p className="text-[10px] uppercase tracking-widest font-black text-white opacity-30 mb-4">
                      {userProfile.username}
                    </p>
                    <p className="text-white/60 text-sm font-medium leading-relaxed max-w-2xl">
                      {userProfile.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-widest font-black text-white opacity-30">
                    {userProfile.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{userProfile.location}</span>
                      </div>
                    )}
                    {userProfile.website && (
                      <a
                        href={userProfile.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <LinkIcon className="h-3 w-3" />
                        <span>{userProfile.website.replace(/^https?:\/\//, '')}</span>
                      </a>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>Joined {userProfile.joined}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-8 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-white">{userProfile.stats.posts.toLocaleString()}</span>
                      <span className="text-[9px] uppercase tracking-widest font-black text-white opacity-30">Posts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-white">{userProfile.stats.followers.toLocaleString()}</span>
                      <span className="text-[9px] uppercase tracking-widest font-black text-white opacity-30">Followers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-white">{userProfile.stats.following.toLocaleString()}</span>
                      <span className="text-[9px] uppercase tracking-widest font-black text-white opacity-30">Following</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="divide-y divide-white/5">
            {userPosts.map((post) => (
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

