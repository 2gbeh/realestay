import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
//
import { todosApi, TodoType, TodosPipe } from "@/store/todos";
import { usersApi, UserType, UsersPipe } from "@/store/users";

export function useDashboardCatchAll(todoId: number) {
  // SHARED STATES
  const router = useRouter();
  const { data: getTodoByIdQueryData, ...getTodoByIdQueryState } =
    todosApi.useGetTodoByIdQuery(todoId);
  const [
    lazyGetUserByIdQuery,
    { data: lazyGetUserByIdQueryData, ...lazyGetUserByIdQueryState },
  ] = usersApi.useLazyGetUserByIdQuery();
  // LOCAL STATES
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [transformedTodo, setTransformedTodo] = useState<TodoType>();
  const [transformedUser, setTransformedUser] = useState<UserType>();
  // COMPUTED VALUES
  // STATE MUTATORS
  const handlePrev = () =>
    todoId > 1 && router.push(`/dashboard/${Number(todoId) - 1}`);
  const handleNext = () =>
    todoId < 200 && router.push(`/dashboard/${Number(todoId) + 1}`);
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
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [getTodoByIdQueryData]);

  return {
    isLoading,
    hasError,
    transformedTodo,
    transformedUser,
    handlePrev,
    handleNext,
  };
}
