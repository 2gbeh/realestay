import {
  MantineProvider as Provider,
  MantineColorsTuple,
  createTheme,
} from "@mantine/core";

// https://mantine.dev/colors-generator/
export const COLOR: Record<string, MantineColorsTuple> = {
  brand: [
    "#e2faff",
    "#ccefff",
    "#9cddff",
    "#67cafe",
    "#40bafc",
    "#29b0fc",
    "#18abfe",
    "#0096e3",
    "#0085cc",
    "#0073b5",
  ],
  accent: [
    "#fff6e2",
    "#ffeccd",
    "#ffd79c",
    "#ffc166",
    "#feae39",
    "#fea21e",
    "#ff9c0e",
    "#e38800",
    "#ca7800",
    "#b06600",
  ],
};

const theme = createTheme({
  colors: COLOR,
  primaryColor: "accent",
});

const MantineProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  console.log("🚀 ~ MantineProvider");
  // RENDER
  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  );
};

export default MantineProvider;
