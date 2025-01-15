import { UserEntity } from "@/features/user/utils/user.interface";

export interface PostEntity {
  id: number | string;
  title: string;
  body: string;
  userId: number | string;
  user?: UserEntity;
}
