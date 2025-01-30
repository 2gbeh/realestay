import { usersApi } from "@/store/users/users.api";

export function useUsers() {
  const { data: users, isLoading: fetching } = usersApi.useGetAllUsersQuery();
  // const { data: users, isLoading: fetching } = usersApi.useGetUserByIdQuery();
  const canSubmit = !fetching;
  //

  return {
    fetching,
    users,
    canSubmit,
  };
}