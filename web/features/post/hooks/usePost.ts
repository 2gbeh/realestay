"use client";

import { FormEvent, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
//
import { PROTOTYPE as P } from "@/constants/PROTOTYPE";
import {
  GetAllPostsType,
  GET_ALL_POSTS,
  CreatePostType,
  CREATE_POST,
  DeletePostType,
  DELETE_POST,
} from "../utils/post.action";
import { POST } from "../utils/post.constant";

type SelectedPostId = number | string;

const initialValues = P.createPost.formData
  ? POST.mockValues
  : POST.defaultValues;

export function usePost() {
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
  const resetFormData = () => setFormData(POST.defaultValues);
  const updateFormData = (name: keyof typeof initialValues, value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }));
  async function handleCreate() {
    try {
      await createPost({
        variables: formData,
        refetchQueries: [GET_ALL_POSTS],
      });
      resetFormData();
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
