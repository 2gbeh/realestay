"use client";

import React, { cache, useState } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
//
import {
  GetAllPostsType,
  GET_ALL_POSTS,
  CreatePostType,
  CREATE_POST,
} from "../../utils/posts.action";

const AddPostForm = () => {
  const [selectedPostId, setSelectedPostId] = useState<null | number | string>(
    null
  );
  const { data, ...getAllPostsState } =
    useQuery<GetAllPostsType>(GET_ALL_POSTS);
  const [createPost, deletePostState] =
    useMutation<CreatePostType>(CREATE_POST);
  async function handleCreate() {
    //   await createPost({
    //     variables: { id: postId },
    //     refetchQueries: [GET_ALL_POSTS],
    //   });
  }
  console.log("🚀 ~ AddPostForm");
  // RENDERS
  return (
    <form>
      <fieldset disabled={false}>
        <div className="flex-box">
          <div className="flex-item">
            <label htmlFor="userId">Author</label>
            <select>
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
            <input type="text" />
          </div>
        </div>
        <div className="flex-item">
          <label htmlFor="body">Message</label>
          <textarea></textarea>
        </div>
        <div style={{ marginTop: 20, float: "right" }}>
          <button className="btn btn-info" onClick={handleCreate}>
            Save
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default React.memo(AddPostForm);
