import { gql } from "@apollo/client";
import { PostEntity } from "./posts.interface";

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
  mutation createPost($userId: String!, $title: String!, $body: String!) {
    createPost(userId: $userId, title: $title, body: $body) {
      id
    }
  }
`;

export type UpdatePostType = { updatePost: PostEntity };
export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String, $body: String) {
    updatePost(id: $id, title: $title, body: $body) {
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
