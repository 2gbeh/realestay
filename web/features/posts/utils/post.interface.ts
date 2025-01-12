export interface PostEntity {
  id: number | string;
  title: string;
  body: string;
  user: {
    id: number | string;
    username: string;
    email: string;
  };
}
