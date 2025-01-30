import { mockApiCall } from "@/utils/mockApiCall";
import { TodoEntity } from "./todo.types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export class TodoService {
  static async getAllTodos(): Promise<TodoEntity[]> {
    await mockApiCall(5);
    const raw = await fetch(`${baseUrl}/todos`);
    const res = await raw.json();
    return res;
  }

  static async getTodoById(id: number): Promise<TodoEntity> {
    const raw = await fetch(`${baseUrl}/todos/${id}`);
    const res = await raw.json();
    return res;
  }
}
