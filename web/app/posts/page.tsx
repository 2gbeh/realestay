import { Metadata } from "next";
//
import { PostsTable } from "@/features/posts";

export const metadata: Metadata = {
  title: "All Posts",
};

export default function Posts() {
  // RENDERS
  return <PostsTable />;
}
