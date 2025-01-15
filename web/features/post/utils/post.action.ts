import { gql } from "@apollo/client";
import { PostEntity } from "./post.interface";

export type GetAllPostsType = { getAllPosts: PostEntity[] };
export const GET_ALL_POSTS = gql`
  query getAllPosts {
    getAllPosts {
      id
      title
      user {
        id
        name
      }
    }
  }
`;

export type GetPostByIdType = { getPostById: PostEntity };
export const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    getPostById(id: $id) {
      id
      title
      body
      user {
        id
        name
        email
      }
    }
  }
`;

export type CreatePostType = { createPost: PostEntity };
export const CREATE_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`;

export type UpdatePostType = { updatePost: PostEntity };
export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $input: UpdatePostInput) {
    updatePost(id: $id, input: $input) {
      id
      title
      body
    }
  }
`;

export type DeletePostType = { deletePost: PostEntity };
export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
