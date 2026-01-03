import { relations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

// Better-auth User table (authentication)
export const user = pgTable(
  "user",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("email_verified").default(false).notNull(),
    image: text("image"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
    // Twitter-specific fields
    username: varchar({ length: 50 }).unique(),
    bio: text("bio"),
  },
  (table) => ({
    emailIdx: index("user_email_idx").on(table.email),
    usernameIdx: index("user_username_idx").on(table.username),
  })
);

// Better-auth Session table
export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => ({
    userIdIdx: index("session_userId_idx").on(table.userId),
  })
);

// Better-auth Account table (OAuth providers)
export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => ({
    userIdIdx: index("account_userId_idx").on(table.userId),
  })
);

// Better-auth Verification table
export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => ({
    identifierIdx: index("verification_identifier_idx").on(table.identifier),
  })
);

// Posts table
export const postsTable = pgTable(
  "posts",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    content: varchar({ length: 280 }).notNull(),
    parentId: integer("parent_id").references((): any => postsTable.id, {
      onDelete: "cascade",
    }),
    createdAt: timestamp().defaultNow().notNull(),
    updatedAt: timestamp()
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
    deletedAt: timestamp("deleted_at"),
  },
  (table) => ({
    userIdIdx: index("posts_user_id_idx").on(table.userId),
    parentIdIdx: index("posts_parent_id_idx").on(table.parentId),
    createdAtIdx: index("posts_created_at_idx").on(table.createdAt),
  })
);

// Likes table
export const likesTable = pgTable(
  "likes",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    postId: integer("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("likes_user_id_idx").on(table.userId),
    postIdIdx: index("likes_post_id_idx").on(table.postId),
    uniqueUserPost: unique("likes_user_post_unique").on(
      table.userId,
      table.postId
    ),
  })
);

// Retweets table
export const retweetsTable = pgTable(
  "retweets",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    postId: integer("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    comment: text(),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("retweets_user_id_idx").on(table.userId),
    postIdIdx: index("retweets_post_id_idx").on(table.postId),
    uniqueUserPost: unique("retweets_user_post_unique").on(
      table.userId,
      table.postId
    ),
  })
);

// Follows table
export const followsTable = pgTable(
  "follows",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    followerId: text("follower_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    followingId: text("following_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    followerIdIdx: index("follows_follower_id_idx").on(table.followerId),
    followingIdIdx: index("follows_following_id_idx").on(table.followingId),
    uniqueFollow: unique("follows_follower_following_unique").on(
      table.followerId,
      table.followingId
    ),
  })
);

// Hashtags table
export const hashtagsTable = pgTable(
  "hashtags",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 100 }).notNull().unique(),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    nameIdx: index("hashtags_name_idx").on(table.name),
  })
);

// Post hashtags junction table
export const postHashtagsTable = pgTable(
  "post_hashtags",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    postId: integer("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    hashtagId: integer("hashtag_id")
      .notNull()
      .references(() => hashtagsTable.id, { onDelete: "cascade" }),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    postIdIdx: index("post_hashtags_post_id_idx").on(table.postId),
    hashtagIdIdx: index("post_hashtags_hashtag_id_idx").on(table.hashtagId),
    uniquePostHashtag: unique("post_hashtags_post_hashtag_unique").on(
      table.postId,
      table.hashtagId
    ),
  })
);

// Mentions table
export const mentionsTable = pgTable(
  "mentions",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    postId: integer("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    postIdIdx: index("mentions_post_id_idx").on(table.postId),
    userIdIdx: index("mentions_user_id_idx").on(table.userId),
    uniquePostUser: unique("mentions_post_user_unique").on(
      table.postId,
      table.userId
    ),
  })
);

// Media table
export const mediaTable = pgTable(
  "media",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    postId: integer("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    url: varchar({ length: 500 }).notNull(),
    type: varchar({ length: 20 }).notNull(), // 'image' or 'video'
    order: integer().notNull().default(0),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    postIdIdx: index("media_post_id_idx").on(table.postId),
  })
);

// Bookmarks table
export const bookmarksTable = pgTable(
  "bookmarks",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    postId: integer("post_id")
      .notNull()
      .references(() => postsTable.id, { onDelete: "cascade" }),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("bookmarks_user_id_idx").on(table.userId),
    postIdIdx: index("bookmarks_post_id_idx").on(table.postId),
    uniqueUserPost: unique("bookmarks_user_post_unique").on(
      table.userId,
      table.postId
    ),
  })
);

// Notifications table
export const notificationsTable = pgTable(
  "notifications",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    type: varchar({ length: 20 }).notNull(), // 'like', 'retweet', 'reply', 'mention', 'follow'
    actorId: text("actor_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    postId: integer("post_id").references(() => postsTable.id, {
      onDelete: "cascade",
    }),
    read: boolean().notNull().default(false),
    createdAt: timestamp().defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: index("notifications_user_id_idx").on(table.userId),
    readIdx: index("notifications_read_idx").on(table.read),
    createdAtIdx: index("notifications_created_at_idx").on(table.createdAt),
  })
);

// Relations
export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  accounts: many(account),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));
