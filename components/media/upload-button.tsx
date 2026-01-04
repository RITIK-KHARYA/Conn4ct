"use client";

import { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/lib/uploadthing";
import { trpc } from "@/lib/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type {
  MediaUploadButtonProps,
  UploadedFile,
  MediaType,
} from "@/types/media";

export function MediaUploadButton({
  postId,
  onUploadComplete,
  accept = "image",
  className,
}: MediaUploadButtonProps) {
  const [uploading, setUploading] = useState(false);
  const uploadMedia = trpc.media.upload.useMutation();

  const endpoint: keyof OurFileRouter =
    accept === "video" ? "videoUploader" : "imageUploader";

  const handleUploadComplete = async (res: UploadedFile[]) => {
    if (!res || res.length === 0) return;

    setUploading(true);
    try {
      const uploadPromises = res.map((file, index) =>
        uploadMedia.mutateAsync({
          postId,
          url: file.url,
          type: (file.type as MediaType) || accept,
          order: index,
        })
      );

      await Promise.all(uploadPromises);
      const urls = res.map((file) => file.url);
      onUploadComplete?.(urls);
      toast.success(`Successfully uploaded ${res.length} file(s)`);
    } catch (error) {
      toast.error("Failed to save media to database");
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <UploadButton<OurFileRouter, typeof endpoint>
      endpoint={endpoint}
      onClientUploadComplete={handleUploadComplete}
      onUploadError={(error: Error) => {
        toast.error(`Upload failed: ${error.message}`);
        setUploading(false);
      }}
      onUploadBegin={() => {
        setUploading(true);
      }}
      className={className}
      content={{
        button: ({ ready }: { ready: boolean }) => (
          <Button
            type="button"
            disabled={!ready || uploading}
            variant="outline"
          >
            {uploading
              ? "Uploading..."
              : accept === "video"
              ? "Upload Video"
              : "Upload Image"}
          </Button>
        ),
      }}
    />
  );
}
