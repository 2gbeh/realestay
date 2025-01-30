import { baseApi } from "../base/base.api";
import { IApiResponse } from "../base/base.types";
import { UserEntity, QueryUsersDTO } from "./users.types";
import mockGetAllUsersData from "./data/getAllUsers.json";
import mockGetUserByIdData from "./data/getUserById.json";

type ResourceType = IApiResponse<UserEntity>;
type CollectionType = IApiResponse<UserEntity[]>;

let [url, type] = ["/users", "users"] as const;

export const usersApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // INDEX
    getAllUsers: build.query<CollectionType, QueryUsersDTO>({
      query: (params) => ({
        method: "GET",
        url,
        ...(params && { params }),
      }),
      transformResponse: (res: UserEntity[]) => ({
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
    mockGetAllUsers: build.query<CollectionType, void>({
      queryFn: () => ({
        data: { success: true, data: mockGetAllUsersData, message: null },
      }),
    }),
    // SHOW
    getUserById: build.query<ResourceType, number>({
      query: (id) => `${url}/${id}`,
      transformResponse: (res: UserEntity) => ({
        success: true,
        data: res,
        message: null,
      }),
      providesTags: (result, error, id) => [{ type, id }],
    }),
    mockGetUserById: build.query<ResourceType, void>({
      queryFn: () => ({
        data: { success: true, data: mockGetUserByIdData, message: null },
      }),
    }),
  }),
});
