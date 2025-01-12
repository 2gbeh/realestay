import { gql } from "@apollo/client";

export class PostService {
  static getAll() {
    return gql`
      query getAllPosts {
        getAllPosts {
          id
          title
          body
          user {
            id
            username
            email
          }
        }
      }
    `;
  }
}
