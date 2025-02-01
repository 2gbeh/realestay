import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

type ThemeType = "light" | "dark";

interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  console.log("🚀 ~ ThemeContextProvider");
  // RENDER
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export function useThemeContext() {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error(
      "ContextError: useThemeContext can only be used within ThemeContextProvider",
    );
  }

  return themeContext;
}
