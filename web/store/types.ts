export type RootSliceType = {
  isLoading: boolean;
  status?: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
};

export type BaseApiResponseType<T> = {
  success: boolean;
  data: null | T;
  message: null | string;
};
