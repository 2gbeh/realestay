import { BaseApiResponseType } from "../store.types";
import { baseApi } from "../base/base.api";
import { TodoEntity, QueryTodosDTO } from "./todos.types";
import mockGetAllTodosData from "./data/getAllTodos.json";
import mockGetTodoByIdData from "./data/getTodoById.json";

type ResourceType = BaseApiResponseType<TodoEntity>;
type CollectionType = BaseApiResponseType<TodoEntity[]>;

let [url, type] = ["/todos", "todos"] as const;

export const todosApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // INDEX
    getAllTodos: build.query<CollectionType, QueryTodosDTO>({
      query: (params) => ({
        method: "GET",
        url,
        ...(params && { params }),
      }),
      transformResponse: (res: TodoEntity[]) => ({
        success: true,
        data: res,
        message: null,
      }),
      providesTags: (res) =>
        res?.data && Array.isArray(res.data)
          ? [
              ...res.data.map(({ id }) => ({ type, id }) as const),
              { type, id: "LIST" },
            ]
          : [{ type, id: "LIST" }],
    }),
    mockGetAllTodos: build.query<CollectionType, void>({
      queryFn: () => ({
        data: { success: true, data: mockGetAllTodosData, message: null },
      }),
    }),
    // SHOW
    getTodoById: build.query<ResourceType, number>({
      query: (id) => `${url}/${id}`,
      transformResponse: (res: TodoEntity) => ({
        success: true,
        data: res,
        message: null,
      }),
      providesTags: (result, error, id) => [{ type, id }],
    }),
    mockGetTodoById: build.query<ResourceType, void | number>({
      queryFn: () => ({
        data: { success: true, data: mockGetTodoByIdData, message: null },
      }),
    }),
  }),
});
