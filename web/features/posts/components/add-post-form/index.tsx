"use client";

import React from "react";
import { useUsers } from "@/features/users";
import { usePosts } from "../../hooks/usePosts";

const AddPostForm = () => {
  const { users, getAllUsersState } = useUsers();
  const { defaultValues, createPostState, handleCreate } = usePosts();
  console.log("🚀 ~ AddPostForm");
  // RENDERS
  return (
    <form onSubmit={handleCreate}>
      <fieldset disabled={createPostState.loading}>
        <div className="flex-box">
          <div className="flex-item">
            <label htmlFor="userId">Author</label>
            <select
              name="userId"
              defaultValue={defaultValues.userId}
              required
              disabled={getAllUsersState.loading}
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
              name="title"
              defaultValue={defaultValues.title}
              required
            />
          </div>
        </div>
        <div className="flex-item">
          <label htmlFor="body">Message</label>
          <textarea name="body" defaultValue={defaultValues.body} required />
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
