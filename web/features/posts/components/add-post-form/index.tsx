"use client";

import React from "react";
import { usePosts } from "../../hooks/usePosts";

const AddPostForm = () => {
  const { createPostState, handleCreate } = usePosts();
  console.log("🚀 ~ AddPostForm");
  // RENDERS
  return (
    <form onSubmit={handleCreate}>
      <fieldset disabled={createPostState.loading}>
        <div className="flex-box">
          <div className="flex-item">
            <label htmlFor="userId">Author</label>
            <select name="userId" defaultValue="1" required>
              <option value=""></option>
              {[{ value: "1", label: "Male" }].map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-item">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" defaultValue="New title" required />
          </div>
        </div>
        <div className="flex-item">
          <label htmlFor="body">Message</label>
          <textarea name="body" defaultValue="New body" required />
        </div>
        <div style={{ marginTop: 20 }}>
          <button className="btn btn-info" style={{ float: "right" }}>
            Save{createPostState.loading && "..."}
          </button>
          <div className="error" style={{ marginRight: 20 }}>
            {createPostState?.error?.message}
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default React.memo(AddPostForm);
