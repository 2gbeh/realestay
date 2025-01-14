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

export function usePosts() {
  const { data: getAllPostsData, ...getAllPostsState } =
    useQuery<GetAllPostsType>(GET_ALL_POSTS);
  const [createPost, createPostState] =
    useMutation<CreatePostType>(CREATE_POST);
  const [deletePost, deletePostState] =
    useMutation<DeletePostType>(DELETE_POST);
  const [selectedPostId, setSelectedPostId] = useState<SelectedPostId | null>(
    null
  );
  const posts = getAllPostsData?.getAllPosts || [];
  //
  async function handleCreate(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const variables = Object.fromEntries(formData.entries());
    // console.log("🚀 ~ handleCreate ~ variables:", variables);
    await createPost({
      variables,
      refetchQueries: [GET_ALL_POSTS],
    });
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
    getAllPostsState,
    createPostState,
    deletePostState,
    handleCreate,
    handleDelete,
  };
}
