"use client";

import { useQuery, useMutation } from "@apollo/client";
//
import { GetAllUsersType, GET_ALL_USERS } from "../utils/user.action";

export function useUser() {
  const { data: getAllUsersData, ...getAllUsersState } =
    useQuery<GetAllUsersType>(GET_ALL_USERS);
  const users = getAllUsersData?.getAllUsers || [];
  //
  return {
    users,
    getAllUsersState,
  };
}
