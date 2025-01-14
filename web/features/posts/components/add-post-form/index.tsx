"use client";

import React from "react";
import { useUsers } from "@/features/users";
import { usePosts } from "../../hooks/usePosts";

const AddPostForm = () => {
  const { users, getAllUsersState } = useUsers();
  const { formData, updateFormData, createPostState, handleCreate } =
    usePosts();
  console.log("🚀 ~ AddPostForm");
  // RENDERS
  return (
    <form>
      <fieldset disabled={createPostState.loading}>
        <div className="flex-box">
          <div className="flex-item">
            <label htmlFor="userId">Author</label>
            <select
              id="userId"
              value={formData.userId}
              onChange={(ev) => updateFormData("userId", ev.target.value)}
              disabled={getAllUsersState.loading}
              required
            >
              <option value=""></option>
              {users.map(({ id, name }) => (
                <option key={id} value={String(id)}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-item">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(ev) => updateFormData("title", ev.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex-item">
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            value={formData.body}
            onChange={(ev) => updateFormData("body", ev.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <button
            type="button"
            onClick={handleCreate}
            className="btn btn-info"
            style={{ float: "right" }}
          >
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
