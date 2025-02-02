import { Provider } from "react-redux";
import store from "@/store/config";

const ReduxProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ ReduxProvider");
  // RENDER
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
