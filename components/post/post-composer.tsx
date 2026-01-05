"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MediaUploadButton } from "@/components/media/upload-button";
import { Video, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { PlateEditor } from "@/components/editor/plate-editor";
import type { PlateElementNode, PlateValue } from "@/types/editor";
import Image from "next/image";

const initialValue: PlateValue = [
  {
    type: "p",
    children: [{ text: "" }],
  },
];

export function PostComposer() {
  const [content, setContent] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);
  const maxLength = 280;

  const textContent = useMemo(() => {
    return content
      .map((n) => {
        const node = n as PlateElementNode;
        return (
          node.children?.map((c) => ("text" in c ? c.text : "")).join("") || ""
        );
      })
      .join("\n");
  }, [content]);

  const handlePost = () => {
    if (!textContent.trim()) return;
    console.log("Posting:", { content: textContent, mediaUrls });
    setContent(initialValue);
    setMediaUrls([]);
    setIsFocused(false);
  };

  const handleRemoveMedia = (index: number) => {
    setMediaUrls(mediaUrls.filter((_, i) => i !== index));
  };

  const remainingChars = maxLength - textContent.length;
  const canPost = textContent.trim().length > 0 && remainingChars >= 0;

  return (
    <div
      className={cn(
        "rounded-2xl bg-white/[0.01] border border-white/5 transition-all duration-300",
        isFocused && "bg-white/[0.02] border-white/10 shadow-lg"
      )}
    >
      <div className="p-6 space-y-4">
        <div className="flex gap-4">
          <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center text-white font-black text-xs shrink-0">
            U
          </div>

          <div className="flex-1 space-y-4">
            <PlateEditor
              value={content}
              onChange={setContent}
              placeholder={
                isFocused ? "What's happening?" : "Command intent..."
              }
              maxLength={maxLength}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                if (!textContent) setIsFocused(false);
              }}
              className={isFocused ? "min-h-[140px]" : "min-h-[50px]"}
            />

            {mediaUrls.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {mediaUrls.map((url, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/5 group"
                  >
                    <Image
                      src={url}
                      alt={`Media ${index + 1}`}
                      className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                    <button
                      onClick={() => handleRemoveMedia(index)}
                      className="absolute top-2 right-2 h-6 w-6 rounded-lg bg-black/50 hover:bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3.5 w-3.5 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <MediaUploadButton
                  postId={0}
                  accept="image"
                  onUploadComplete={(urls) =>
                    setMediaUrls([...mediaUrls, ...urls])
                  }
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg text-white/20 hover:text-white hover:bg-white/5 transition-all"
                  title="Add video"
                >
                  <Video className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg text-white/20 hover:text-white hover:bg-white/5 transition-all"
                  title="Add GIF"
                >
                  <Sparkles className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-4">
                {textContent && (
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-16 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full transition-all duration-300",
                          remainingChars < 20
                            ? "bg-destructive"
                            : remainingChars < 50
                            ? "bg-primary/60"
                            : "bg-primary"
                        )}
                        style={{
                          width: `${Math.max(
                            0,
                            (textContent.length / maxLength) * 100
                          )}%`,
                        }}
                      />
                    </div>
                    <span
                      className={cn(
                        "text-[10px] font-black uppercase tracking-widest tabular-nums",
                        remainingChars < 20
                          ? "text-destructive"
                          : remainingChars < 50
                          ? "text-primary"
                          : "text-white/20"
                      )}
                    >
                      {remainingChars}
                    </span>
                  </div>
                )}
                <Button
                  onClick={handlePost}
                  disabled={!canPost}
                  className="h-9 px-6 rounded-lg bg-white text-black hover:bg-white/90 font-black uppercase text-[10px] tracking-widest transition-all disabled:opacity-10 disabled:cursor-not-allowed"
                >
                  Execute
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
