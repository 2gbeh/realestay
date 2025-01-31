export type TodoEntity = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type CreateTodoDTO = Pick<TodoEntity, "userId" | "title">;

export type UpdateTodoDTO = {
  id: number;
  body: Partial<Pick<TodoEntity, "userId" | "title" | "completed">>;
};

export type QueryTodosDTO = void | Pick<TodoEntity, "title">;

export type TodoType = TodoEntity & {
  textColor: string;
  status: "done" | "pending";
};
