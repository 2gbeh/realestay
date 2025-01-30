import { todosApi } from "@/store/todos/todos.api";

export function useTodos() {
  const getAllTodosQuery = todosApi.useGetAllTodosQuery();

  return {
    getAllTodosQuery,
  };
}
