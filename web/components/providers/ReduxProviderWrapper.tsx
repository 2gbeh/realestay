import { Provider as ReduxProvider } from "react-redux";
import { LayoutPropsType } from "@/types/common.types";
import store from "@/store/store.config";

const ReduxProviderWrapper: React.FC<LayoutPropsType> = ({ children }) => {
  console.log("🚀 ~ ReduxProviderWrapper");
  // RENDER
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default ReduxProviderWrapper;
