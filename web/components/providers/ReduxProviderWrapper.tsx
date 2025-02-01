import { Provider as ReduxProvider } from "react-redux";

import store from "@/store/store.config";

const ReduxProviderWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  console.log("🚀 ~ ReduxProviderWrapper");
  // RENDER
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default ReduxProviderWrapper;
