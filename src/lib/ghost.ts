import GhostContentAPI from "@tryghost/content-api";

// In a real production environment, these should be environment variables.
// For now, we use the provided credentials directly.
const GHOST_URL = "https://blogs.codingis.click";
const GHOST_KEY = "12baf57e754788b8f50d821e3f";

import { Post } from "@/types/ghost";

export const ghost = new GhostContentAPI({
  url: GHOST_URL,
  key: GHOST_KEY,
  version: "v5.0",
});

export async function getPosts(): Promise<Post[]> {
  return (await ghost.posts
    .browse({
      limit: "all",
      include: ["tags", "authors"],
    })
    .catch((err: unknown) => {
      console.error(err);
      throw new Error(String(err));
    })) as unknown as Post[];
}

export async function getSinglePost(slug: string) {
  return await ghost.posts
    .read(
      {
        slug,
      },
      {
        include: ["tags", "authors"],
      }
    )
    .catch((err: unknown) => {
      console.error(err);
      throw new Error(String(err));
    });
}

export async function getLatestPosts(limit: number = 3): Promise<Post[]> {
  return (await ghost.posts
    .browse({
      limit: limit,
      include: ["tags", "authors"],
      order: "published_at desc",
    })
    .catch((err: unknown) => {
      console.error(err);
      throw new Error(String(err));
    })) as unknown as Post[];
}
