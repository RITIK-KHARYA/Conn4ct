export type MediaType = "image" | "video";

export interface MediaUploadButtonProps {
  postId: number;
  onUploadComplete?: (urls: string[]) => void;
  accept?: MediaType;
  className?: string;
}

export interface UploadedFile {
  url: string;
  type?: string;
}
