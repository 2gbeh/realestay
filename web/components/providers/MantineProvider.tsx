import { createTheme, MantineProvider as Provider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const MantineProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ MantineProvider");
  // RENDER
  return <Provider theme={theme}>{children}</Provider>;
};

export default MantineProvider;
