import {
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

type ThemeType = "light" | "dark";

interface IThemeContext {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function useThemeContext() {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error(
      "ContextError: useThemeContext can only be used within ThemeContextProvider",
    );
  }

  return themeContext;
}

export const ThemeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme]);

  console.log("🚀 ~ ThemeContextProvider");
  // RENDER
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

