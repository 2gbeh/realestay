import Image from "next/image";
//
import { getAuthLayout } from "@/components/layouts/AuthLayout";
import type {
  GetStaticProps,
  PagePropsType,
  NextPageWithLayout,
} from "@/types/common.types";
import {
  ThemeContextProvider,
  useThemeContext,
} from "@/context/ThemeContext";

export const getStaticProps: GetStaticProps<PagePropsType> = async () => {
  return { props: { title: "Home" } };
};

const Home: NextPageWithLayout = () => {
  console.log("🚀 ~ Home");
  // RENDER
  return (
    <main>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ThemeContextProvider>
        <div className="mt-10 flex flex-col gap-5">
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </ThemeContextProvider>
    </main>
  );
};

Home.getLayout = getAuthLayout;

export default Home;

const ComponentA: React.FC = () => {
  const themeContext = useThemeContext();
  console.log("🚀 ~ ComponentA");
  return <div>ComponentA - {themeContext.theme}</div>;
};
const ComponentB: React.FC = () => {
  console.log("🚀 ~ ComponentB");
  return <div>ComponentB</div>;
};
const ComponentC: React.FC = () => {
  const themeContext = useThemeContext();
  console.log("🚀 ~ ComponentC");
  return (
    <button onClick={themeContext.toggleTheme}>
      ComponentC - {themeContext.theme}
    </button>
  );
};
