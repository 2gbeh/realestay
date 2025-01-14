"use client";

import { FormEvent, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
//
import {
  GetAllPostsType,
  GET_ALL_POSTS,
  CreatePostType,
  CREATE_POST,
  DeletePostType,
  DELETE_POST,
} from "../utils/posts.action";

type SelectedPostId = number | string;

const initialValues = {
  userId: "2",
  title: "New post title",
  body: "New post body",
};

export function usePosts() {
  const [formData, setFormData] = useState(initialValues);
  const { data: getAllPostsData, ...getAllPostsState } =
    useQuery<GetAllPostsType>(GET_ALL_POSTS);
  const [createPost, createPostState] =
    useMutation<CreatePostType>(CREATE_POST);
  const [deletePost, deletePostState] =
    useMutation<DeletePostType>(DELETE_POST);
  const [selectedPostId, setSelectedPostId] = useState<SelectedPostId | null>(
    null
  );
  const posts = getAllPostsData?.getAllPosts.toReversed() || [];
  //
  const updateFormData = (name: keyof typeof initialValues, value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));
  async function handleCreate() {
    try {
      await createPost({
        variables: formData,
        refetchQueries: [GET_ALL_POSTS],
      });
      setFormData({
        userId: "",
        title: "",
        body: "",
      });
    } catch (err) {
      // do absolutely nothing
    }
  }
  async function handleDelete(id: SelectedPostId) {
    if (confirm("Delete post?")) {
      setSelectedPostId(id);
      await deletePost({
        variables: { id },
        refetchQueries: [GET_ALL_POSTS],
      });
      setSelectedPostId(null);
    }
  }

  return {
    posts,
    selectedPostId,
    formData,
    updateFormData,
    getAllPostsState,
    createPostState,
    deletePostState,
    handleCreate,
    handleDelete,
  };
}
