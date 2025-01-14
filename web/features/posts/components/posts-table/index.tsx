"use client";

import React, { cache, useState } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
//
import {
  GetAllPostsType,
  GET_ALL_POSTS,
  DeletePostType,
  DELETE_POST,
} from "../../utils/posts.action";

const PostsTable = () => {
  const [selectedPostId, setSelectedPostId] = useState<null | number | string>(
    null
  );
  const { data, ...getAllPostsState } =
    useQuery<GetAllPostsType>(GET_ALL_POSTS);
  const [deletePost, deletePostState] =
    useMutation<DeletePostType>(DELETE_POST);
  async function handleDelete(postId: string | number) {
    setSelectedPostId(postId);
    await deletePost({
      variables: { id: postId },
      refetchQueries: [GET_ALL_POSTS],
    });
  }
  console.log("🚀 ~ PostsTable");
  // RENDERS
  return getAllPostsState.loading ? (
    <p>Loading...</p>
  ) : getAllPostsState.error ? (
    <p>Error : {getAllPostsState.error?.message}</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Author</th>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.getAllPosts.map((post, i) => (
          <tr
            key={post.id}
            className="transition"
            style={{
              backgroundColor:
                deletePostState.loading && selectedPostId == post.id
                  ? "#ffc"
                  : "inherit",
            }}
          >
            <td>{i + 1}</td>
            <td>{post?.user?.name}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(PostsTable);
