import { UserEntity } from "@/features/users/utils/users.interface";

export interface PostEntity {
  id: number | string;
  title: string;
  body: string;
  userId: number | string;
  user?: UserEntity;
}
