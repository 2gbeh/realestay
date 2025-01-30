import Link from "next/link";
import { clsx } from "clsx";
//
import { getDashboardLayout } from "@/components/layouts/DashboardLayout";
import { TodoEntity, TodoService, TodoPipe } from "@/features/todo";
import type {
  GetStaticProps,
  PagePropsType,
  NextPageWithLayout,
} from "@/types/common.types";

export const getStaticProps: GetStaticProps<PagePropsType> = () => {
  return { props: { title: "Dashboard" } };
};
// export const getStaticProps: GetStaticProps<ReturnType> = async () => {
//   let data: TodoEntity[] = [];
//   try {
//     data = await TodoService.getAllTodos();
//   } catch (err) {
//     console.log("🚀 ~ err:", err);
//   }
//   return { props: { title: "Dashboard", data } };
// };

const Dashboard: NextPageWithLayout = () => {
  const data = use(async () => await TodoService.getAllTodos());
  // console.log("🚀 ~ data:", data);
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      {data.length > 0 ? (
        <ol className="list-inside list-decimal text-center sm:text-left">
          {data.map((item) => {
            const transformed = TodoPipe.transform(item);
            return (
              <li key={item.id} className="mb-2">
                <Link
                  // href={{
                  //   pathname: "/dashboard/[slug]",
                  //   query: { slug: item.id },
                  // }}
                  href={`/dashboard/${encodeURIComponent(item.id)}`}
                >
                  {transformed.title}
                  <code
                    className={clsx(
                      "ml-2 rounded bg-black/[.05] px-1 py-0.5 text-sm font-semibold dark:bg-white/[.06]",
                      transformed.textColor,
                    )}
                  >
                    {transformed.status}
                  </code>
                </Link>
              </li>
            );
          })}
        </ol>
      ) : (
        <h1>No data</h1>
      )}
    </main>
  );
};

Dashboard.getLayout = getDashboardLayout;

export default Dashboard;
