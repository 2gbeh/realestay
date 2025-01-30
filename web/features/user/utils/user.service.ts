import { UserEntity } from "./user.types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export class UserService {
  static async getAllUsers(): Promise<UserEntity[]> {
    const raw = await fetch(`${baseUrl}/users`);
    const res = await raw.json();
    return res;
  }

  static async getUserById(id: number): Promise<UserEntity> {
    const raw = await fetch(`${baseUrl}/users/${id}`);
    const res = await raw.json();
    return res;
  }
}
