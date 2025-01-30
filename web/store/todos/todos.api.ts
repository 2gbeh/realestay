import { baseApi } from "../base/base.api";
import { IApiResponse } from "../base/base.types";
import { TodoEntity, QueryTodosDTO } from "./todos.types";
import mockGetAllTodosData from "./data/getAllTodos.json";
import mockGetTodoByIdData from "./data/getTodoById.json";

type ResourceType = IApiResponse<TodoEntity>;
type CollectionType = IApiResponse<TodoEntity[]>;

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
    mockGetTodoById: build.query<ResourceType, void>({
      queryFn: () => ({
        data: { success: true, data: mockGetTodoByIdData, message: null },
      }),
    }),
  }),
});
