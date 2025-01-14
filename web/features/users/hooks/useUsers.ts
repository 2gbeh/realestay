"use client";

import { useQuery, useMutation } from "@apollo/client";
//
import { GetAllUsersType, GET_ALL_USERS } from "../utils/users.action";

export function useUsers() {
  const { data: getAllUsersData, ...getAllUsersState } =
    useQuery<GetAllUsersType>(GET_ALL_USERS);
  const users = getAllUsersData?.getAllUsers || [];
  //
  return {
    users,
    getAllUsersState,
  };
}
