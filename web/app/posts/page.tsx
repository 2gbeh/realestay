import { Metadata } from "next";
//
import { PostsTable } from "@/features/posts";

export const metadata: Metadata = {
  title: "All Posts | pinksl.ip",
};

export default function Posts() {
  // RENDERS
  return <PostsTable />;
}
