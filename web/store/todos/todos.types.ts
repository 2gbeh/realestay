export type TodoEntity = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type CreateTodoDTO = {
  userId: number;
  title: string;
};

export type UpdateTodoDTO = {
  id: number;
  body: {
    userId?: number;
    title?: string;
    completed?: boolean;
  };
};

export type QueryTodosDTO = void | {
  title: string;
};
