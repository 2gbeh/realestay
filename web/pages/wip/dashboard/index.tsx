import { getDashboardLayout } from "@/components/layouts/DashboardLayout";
import type {
  GetStaticProps,
  PagePropsType,
  NextPageWithLayout,
} from "@/types/common.types";
//
import TodoListItem from "@/components/molecules/todos/TodoListItem";
import { useDashboard } from "@/features/dashboard/hooks/useDashboard";

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  return { props: { title: "Dashboard" } };
};

const Dashboard: NextPageWithLayout = () => {
  const { todos, isLoading } = useDashboard();
  console.log("🚀 ~ Dashboard");
  // RENDER
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : todos.length > 0 ? (
        <ol className="list-inside list-decimal text-center sm:text-left">
          {todos.map((item) => (
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
