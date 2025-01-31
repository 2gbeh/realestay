import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
//
import { todosApi, TodoType, TodosPipe } from "@/store/todos";
import { usersApi, UserType, UsersPipe } from "@/store/users";

export function useDashboardCatchAll(todoId: number) {
  // SHARED STATES
  const { data: getTodoByIdQueryData, ...getTodoByIdQueryState } =
    todosApi.useGetTodoByIdQuery(todoId);
  const [
    lazyGetUserByIdQuery,
    { data: lazyGetUserByIdQueryData, ...lazyGetUserByIdQueryState },
  ] = usersApi.useLazyGetUserByIdQuery();
  // LOCAL STATES
  const [transformedTodo, setTransformedTodo] = useState<TodoType>();
  const [transformedUser, setTransformedUser] = useState<UserType>();
  // COMPUTED VALUES
  const isLoading =
    getTodoByIdQueryState.isFetching || lazyGetUserByIdQueryState.isFetching;
  const hasError =
    getTodoByIdQueryState.error || lazyGetUserByIdQueryState.error;
  // STATE MUTATORS
  // SIDE EFFECTS
  useEffect(() => {
    if (getTodoByIdQueryData?.data) {
      const todo = getTodoByIdQueryData.data;
      let transformed = TodosPipe.transform(todo);
      setTransformedTodo(transformed);
      // get task assigned user
      lazyGetUserByIdQuery(todo.userId)
        .unwrap()
        .then((res) => {
          // console.log("🚀 ~ lazyGetUserByIdQuery ~ res:", res);
          let transformed = UsersPipe.transform(res.data!);
          setTransformedUser(transformed);
        })
        .catch((err) => {
          console.log("🚀 ~ lazyGetUserByIdQuery ~ err:", err);
        });
    }
  }, [getTodoByIdQueryData]);

  return {
    isLoading,
    hasError,
    transformedTodo,
    transformedUser,
  };
}
