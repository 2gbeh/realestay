import { Metadata } from "next";
//
import { AddPostForm, ViewPostsTable } from "@/features/post";

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
      <section style={{ maxHeight: 480, overflow: "auto" }}>
        <ViewPostsTable />
      </section>
    </main>
  );
}
