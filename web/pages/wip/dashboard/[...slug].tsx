import Head from "next/head";
import { getDashboardLayout } from "@/components/layouts/DashboardLayout";
import type {
  GetServerSideProps,
  PagePropsType,
  NextPageWithLayout,
} from "@/types/common.types";
//
import { useDashboardCatchAll } from "@/features/wip/dashboard/hooks/useDashboardCatchAll";
import { APP } from "@/constants/APP";

type ReturnType = PagePropsType & {
  id: string;
};

export const getServerSideProps: GetServerSideProps<ReturnType> = async (
  context,
) => {
  const id = context.query.slug?.[0] || "-1";
  return { props: { title: "DashboardCatchAll", id } };
};

const DashboardCatchAll: NextPageWithLayout<ReturnType> = ({ id }) => {
  const {
    isLoading,
    hasError,
    transformedTodo,
    transformedUser,
    handlePrev,
    handleNext,
  } = useDashboardCatchAll(Number(id));
  console.log("🚀 ~ DashboardCatchAll");
  // RENDER
  return (
    <>
      {transformedTodo?.title && (
        <Head>
          <title>
            {transformedTodo.title} | {APP.name}
          </title>
        </Head>
      )}
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : hasError ? (
          <h1>No data!</h1>
        ) : (
          <p className="text-center sm:text-left">
            {transformedTodo?.title}
            <code
              className={
                "ml-2 rounded bg-black/[.05] px-1 py-0.5 text-sm font-semibold dark:bg-white/[.06] " +
                transformedTodo?.textColor
              }
            >
              {transformedTodo?.status}
            </code>
            <code className="block text-sm">
              Assignee ID:{" "}
              <a href={transformedUser?.mailto}>
                {transformedUser?.displayName}
              </a>
            </code>
          </p>
        )}

        {/* CTA */}
        <div className="flexCenter text-sm">
          <button
            className="h-[30px] bg-black px-2.5 text-white dark:bg-white dark:text-black"
            onClick={handlePrev}
          >
            Prev
          </button>
          <input
            value={id}
            className="h-[30px] w-10 border bg-transparent text-center text-sm"
            disabled
          />
          <button
            className="h-[30px] bg-black px-2.5 text-white dark:bg-white dark:text-black"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
};

DashboardCatchAll.getLayout = getDashboardLayout;

export default DashboardCatchAll;
