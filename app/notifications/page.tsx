import { Sidebar } from "@/components/layout/sidebar";
import { FeedSidebar } from "@/components/layout/feed-sidebar";
import {
  Bell,
  Heart,
  MessageCircle,
  UserPlus,
  Repeat2,
  Link2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: 1,
    type: "like",
    user: { name: "Sarah Chen", username: "@sarahchen", avatar: "S" },
    action: "liked your post",
    target: "Just shipped a new feature! 🚀",
    timestamp: "2m",
    icon: Heart,
    read: false,
  },
  {
    id: 2,
    type: "comment",
    user: { name: "Alex Rivera", username: "@alexr", avatar: "A" },
    action: "commented on your post",
    target: "The future of web development...",
    timestamp: "15m",
    icon: MessageCircle,
    read: false,
  },
  {
    id: 3,
    type: "follow",
    user: { name: "Tech Guru", username: "@techguru", avatar: "T" },
    action: "started following you",
    timestamp: "1h",
    icon: UserPlus,
    read: true,
  },
  {
    id: 4,
    type: "repost",
    user: { name: "Jane Smith", username: "@janesmith", avatar: "J" },
    action: "reposted your post",
    target: "Just discovered an amazing new library...",
    timestamp: "3h",
    icon: Repeat2,
    read: true,
  },
  {
    id: 5,
    type: "mention",
    user: { name: "John Doe", username: "@johndoe", avatar: "J" },
    action: "mentioned you in a post",
    target: "Check out what @username built!",
    timestamp: "5h",
    icon: Link2,
    read: false,
  },
  {
    id: 6,
    type: "like",
    user: { name: "Design Studio", username: "@designstudio", avatar: "D" },
    action: "liked your post",
    target: "New portfolio design system...",
    timestamp: "1d",
    icon: Heart,
    read: true,
  },
];

export default function NotificationsPage() {
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
              <Bell className="h-5 w-5 text-primary" />
              <h1 className="text-sm font-black tracking-[0.3em] uppercase opacity-40 italic">
                System / Notifications
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white opacity-40 italic">
                {notifications.filter((n) => !n.read).length} Unread
              </span>
            </div>
          </div>

          {/* Notifications List */}
          <div className="divide-y divide-white/5">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={cn(
                    "p-8 transition-all duration-300 group hover:bg-white/2 border-b border-white/5 last:border-0",
                    !notification.read && "bg-primary/5"
                  )}
                >
                  <div className="flex gap-6">
                    {/* Icon */}
                    <div
                      className={cn(
                        "h-10 w-10 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                        notification.read
                          ? "bg-white/5 text-white/30"
                          : "bg-primary/10 text-primary"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center text-white font-black text-[10px]">
                            {notification.user.avatar}
                          </div>
                          <div>
                            <span className="font-bold text-sm text-white hover:text-primary transition-colors cursor-pointer uppercase tracking-tight">
                              {notification.user.name}
                            </span>
                            <span className="text-[9px] uppercase tracking-widest font-black text-muted-foreground opacity-30 ml-2">
                              {notification.user.username}
                            </span>
                          </div>
                        </div>
                        <span className="text-[9px] uppercase tracking-widest font-black text-white opacity-20">
                          {notification.timestamp}
                        </span>
                      </div>

                      <p className="text-white/60 text-sm font-medium tracking-tight">
                        {notification.action}
                        {notification.target && (
                          <span className="text-white/40 italic ml-1">
                            &quot;{notification.target}&quot;
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Unread Indicator */}
                    {!notification.read && (
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
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
