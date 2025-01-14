"use client";

import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
//
import {
  GetAllPostsType,
  GET_ALL_POSTS,
  DeletePostType,
  DELETE_POST,
} from "../../utils/posts.action";

const ViewPostsTable = () => {
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
  console.log("🚀 ~ ViewPostsTable");
  // RENDERS
  return (
    <table>
      <caption>Showing {data?.getAllPosts.length || 0} total records</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Author</th>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {getAllPostsState.loading ? (
          <tr>
            <td colSpan={4} className="text-sm text-center">
              Loading posts...
            </td>
          </tr>
        ) : getAllPostsState.error ? (
          <tr>
            <td colSpan={4} className="text-sm text-center error">
              Error: {getAllPostsState.error?.message}
            </td>
          </tr>
        ) : (
          data?.getAllPosts.map((post, i) => (
            <tr
              key={post.id}
              style={{
                color:
                  deletePostState.loading && selectedPostId == post.id
                    ? "red"
                    : "inherit",
              }}
            >
              <td>{i + 1}</td>
              <td>{post?.user?.name}</td>
              <td>{post.title}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default React.memo(ViewPostsTable);
