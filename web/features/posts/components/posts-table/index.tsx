"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
//
import { PostEntity } from "../../utils/post.interface";
import { PostService } from "../../utils/post.service";

const PostsTable = () => {
  const { loading, error, data } = useQuery<{ getAllPosts: PostEntity[] }>(
    PostService.getAll()
  );
  console.log("🚀 ~ PostsTable", loading, error, data);
  // RENDERS
  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error : {error?.message}</p>
  ) : (
    <table>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Body</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>
      {data?.getAllPosts.map((post) => (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td>{post.body}</td>
          <td>
            <Link href="">- {post.user.username} (post.user.email)</Link>
          </td>
          <td></td>
        </tr>
      ))}
    </table>
  );
};

export default React.memo(PostsTable);
