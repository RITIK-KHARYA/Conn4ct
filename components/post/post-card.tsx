"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Repeat2,
  Share2,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PostCardProps {
  id: number;
  author: {
    name: string;
    username: string;
    avatar?: string;
  };
  content: string;
  media?: string[];
  likes: number;
  comments: number;
  retweets: number;
  timestamp: string;
}

export function PostCard({
  author,
  content,
  media,
  likes,
  comments,
  retweets,
  timestamp,
}: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [retweetCount, setRetweetCount] = useState(retweets);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweetCount((prev) => (isRetweeted ? prev - 1 : prev + 1));
  };

  return (
    <article className="p-8 transition-all duration-300 group bg-white/[0.01] hover:bg-white/[0.02] border-b border-white/5 last:border-0">
      <div className="flex gap-6">
        {/* Avatar */}
        <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-white font-black text-xs flex-shrink-0 group-hover:bg-white/10 transition-colors">
          {author.name[0]}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="font-bold text-sm text-white hover:text-primary transition-colors cursor-pointer uppercase tracking-tight">
                {author.name}
              </span>
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-black text-muted-foreground opacity-30">
                <span>{author.username}</span>
                <span>·</span>
                <span>{timestamp}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-all h-8 w-8 rounded-lg hover:bg-white/5"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>

          {/* Post Content */}
          <p className="text-white/80 leading-relaxed whitespace-pre-wrap text-base font-medium tracking-tight max-w-2xl">
            {content}
          </p>

          {/* Media */}
          {media && media.length > 0 && (
            <div
              className={cn(
                "rounded-2xl overflow-hidden mt-6 border border-white/5 bg-white/[0.01]",
                media.length === 1 ? "max-w-xl" : "grid grid-cols-2 gap-2"
              )}
            >
              {media.map((url, index) => (
                <div
                  key={index}
                  className="aspect-video relative group/media overflow-hidden"
                >
                  <Image
                    src={url}
                    alt={`Media ${index + 1}`}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover/media:grayscale-0 group-hover/media:opacity-100 group-hover/media:scale-105 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-8 pt-6">
            <button
              onClick={handleLike}
              className={cn(
                "flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all",
                isLiked ? "text-primary" : "text-white/20 hover:text-white"
              )}
            >
              <Heart className={cn("h-3.5 w-3.5", isLiked && "fill-current")} />
              <span>{likeCount}</span>
            </button>

            <button
              onClick={handleRetweet}
              className={cn(
                "flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all",
                isRetweeted ? "text-primary" : "text-white/20 hover:text-white"
              )}
            >
              <Repeat2 className="h-3.5 w-3.5" />
              <span>{retweetCount}</span>
            </button>

            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all">
              <MessageCircle className="h-3.5 w-3.5" />
              <span>{comments}</span>
            </button>

            <button className="flex items-center text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all ml-auto">
              <Share2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

