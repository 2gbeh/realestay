export interface ISlice {
  isLoading: boolean;
  status?: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}

export interface IApiResponse<T> {
  success: boolean;
  data: null | T;
  message: null | string;
}
