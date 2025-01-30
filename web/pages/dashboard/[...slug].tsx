import type { GetServerSideProps } from "next";
//
import type { NextPageWithLayout } from "../_app";
import { getDashboardLayout } from "@/components/layouts/DashboardLayout";
import { TodoEntity, TodoService, TodoPipe } from "@/features/todo";
import { UserEntity, UserService, UserPipe } from "@/features/user";

type ReturnType = {
  title?: string;
  data: { todo?: TodoEntity; user?: UserEntity };
};

export const getServerSideProps: GetServerSideProps<ReturnType> = async (
  context,
) => {
  let data: ReturnType["data"] = {};
  try {
    let id = 0;
    if (context.query?.slug && Array.isArray(context.query.slug)) {
      // get id from query params
      id = Number(context.query.slug[0]);
      // fetch todo
      const todoData = await TodoService.getTodoById(id);
      if (todoData?.userId) {
        data.todo = todoData;
        // fetch user
        const userData = await UserService.getUserById(todoData.userId);
        if (userData?.id) {
          data.user = userData;
        }
      }
    }
  } catch (err) {
    console.log("🚀 ~ err:", err);
  }
  return { props: { title: data?.todo?.title || "DashboardCatchAll", data } };
};

const DashboardCatchAll: NextPageWithLayout<ReturnType> = ({
  data: { todo, user },
}) => {
  if (todo && user) {
    const transformedTodo = TodoPipe.transform(todo);
    const transformedUser = UserPipe.transform(user);
    // console.log("🚀 ~ data:", data);
    return (
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <p className="list-inside list-decimal text-center sm:text-left">
          {transformedTodo.title}
          <code
            className={
              "ml-2 rounded bg-black/[.05] px-1 py-0.5 text-sm font-semibold dark:bg-white/[.06] " +
              transformedTodo.textColor
            }
          >
            {transformedTodo.status}
          </code>
          <code className="block text-sm">
            Assignee ID:{" "}
            <a href={transformedUser.mailto}>{transformedUser.displayName}</a>
          </code>
        </p>
      </main>
    );
  }

  // ERROR
  return (
    <main>
      <h1>No data</h1>
    </main>
  );
};

DashboardCatchAll.getLayout = getDashboardLayout;

export default DashboardCatchAll;
