import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
//
import { todosApi } from "@/store/todos/todos.api";

export function useDashboard() {
  // SHARED STATES
  const { data, isLoading } = todosApi.useGetAllTodosQuery();  
  // LOCAL STATES
  // COMPUTED VALUES
  const todos = data?.data || [];
  // STATE MUTATORS
  // SIDE EFFECTS

  return {
    todos,
    isLoading,
  };
}
