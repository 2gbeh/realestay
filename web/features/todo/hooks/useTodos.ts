import { todosApi } from "@/store/todos/todos.api";

export function useTodos() {
  const { data: todos, isLoading: fetching } = todosApi.useGetAllTodosQuery();
  // const { data: todos, isLoading: fetching } = todosApi.useGetTodoByIdQuery();
  const canSubmit = !fetching;
  //

  return {
    fetching,
    todos,
    canSubmit,
  };
}