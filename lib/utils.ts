import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { posts } from '#site/content'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function sortPosts(post: Array<posts>) {
  return post.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  })
}