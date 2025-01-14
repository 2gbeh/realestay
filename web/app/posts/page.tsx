import { Metadata } from "next";
//
import { AddPostForm, ViewPostsTable } from "@/features/posts";

export const metadata: Metadata = {
  title: "All Posts | pinksl.ip",
};

export default function Posts() {
  // RENDERS
  return (
    <main>
      <section>
        <AddPostForm />
      </section>
      <section>
        <ViewPostsTable />
      </section>
    </main>
  );
}
