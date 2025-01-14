"use client";

import React from "react";
import { usePosts } from "../../hooks/usePosts";

const ViewPostsTable = () => {
  const {
    posts,
    selectedPostId,
    getAllPostsState,
    deletePostState,
    handleDelete,
  } = usePosts();
  console.log("🚀 ~ ViewPostsTable");
  // RENDERS
  return (
    <table>
      <caption>Showing {posts.length} total records</caption>
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
          posts.map((post, i) => (
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
