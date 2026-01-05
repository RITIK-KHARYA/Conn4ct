import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 4 } })
    .middleware(async () => {
      // Add authentication check here when ready
      // const session = await auth.api.getSession({ headers });
      // if (!session) throw new UploadThingError("Unauthorized");
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      return { url: file.url, type: "image" };
    }),

  videoUploader: f({ video: { maxFileSize: "64MB", maxFileCount: 1 } })
    .middleware(async () => {
      // Add authentication check here when ready
      // const session = await auth.api.getSession({ headers });
      // if (!session) throw new UploadThingError("Unauthorized");
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      return { url: file.url, type: "video" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
