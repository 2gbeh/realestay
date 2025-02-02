import { MantineProvider as Provider, createTheme } from "@mantine/core";

/** Put your mantine theme override here */
const theme = createTheme({});

const MantineProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ MantineProvider");
  // RENDER
  return <Provider theme={theme}>{children}</Provider>;
};

export default MantineProvider;
