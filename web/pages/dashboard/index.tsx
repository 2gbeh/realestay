import { getDashboardLayout } from "@/components/layouts/DashboardLayout";
import type {
  GetStaticProps,
  PagePropsType,
  NextPageWithLayout,
} from "@/types/common.types";
//
import TodoListItem from "@/features/todos/components/TodoListItem";
import { todosApi } from "@/store/todos/todos.api";

export const getStaticProps: GetStaticProps<PagePropsType> = () => {
  return { props: { title: "Dashboard" } };
};

const Dashboard: NextPageWithLayout = () => {
  const getAllTodosQuery = todosApi.useMockGetAllTodosQuery();
  // console.log("🚀 ~ todos:", todos);
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      {getAllTodosQuery.isLoading ? (
        <h1>Loading...</h1>
      ) : getAllTodosQuery?.data?.data &&
        getAllTodosQuery.data.data.length > 0 ? (
        <ol className="list-inside list-decimal text-center sm:text-left">
          {getAllTodosQuery.data.data.map((item) => (
            <li key={item.id} className="mb-2">
              <TodoListItem todo={item} />
            </li>
          ))}
        </ol>
      ) : (
        <h1>No data!</h1>
      )}
    </main>
  );
};

Dashboard.getLayout = getDashboardLayout;

export default Dashboard;
