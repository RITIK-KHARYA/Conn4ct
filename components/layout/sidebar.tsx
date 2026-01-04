"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Bell,
  Bookmark,
  User,
  Settings,
  LogOut,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Search },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/resume", label: "Resume", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-64 h-full">
      <div className="flex flex-col h-full space-y-8">
        {/* Logo */}
        <Link
          href="/home"
          className="flex items-center gap-3 px-2 group"
        >
          <div className="h-10 w-10 rounded-xl bg-white text-black flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="font-black text-xl">C</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            Conn4ct
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                  isActive
                    ? "text-primary bg-white/[0.03]"
                    : "text-muted-foreground hover:text-white hover:bg-white/[0.02]"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-all duration-200",
                    isActive ? "text-primary" : "group-hover:text-white"
                  )}
                />
                <span className={cn(
                  "text-sm font-bold uppercase tracking-widest",
                  isActive ? "opacity-100" : "opacity-50 group-hover:opacity-100"
                )}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Card */}
        <div className="p-1 rounded-2xl bg-white/5 border border-white/5 space-y-px">
          <div className="p-4 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-black text-xs">
              U
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-0.5">Operator</div>
              <div className="text-xs font-bold text-white truncate tracking-tight uppercase">Username</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/5">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 rounded-none bg-background hover:bg-white/5 text-muted-foreground hover:text-white"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 rounded-none bg-background hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}

