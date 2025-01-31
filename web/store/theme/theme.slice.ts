import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store.config";

type SliceType = {
  theme: "light" | "dark";
};

const initialState = {
  theme: "dark",
} satisfies SliceType as SliceType;

const slice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    reset: () => initialState,
    setTheme: (state, action: PayloadAction<SliceType["theme"]>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const themeSliceActions = slice.actions;
export default slice.reducer;

// USE const currentTheme = useAppSelector(selectCurrentTheme)
export const selectCurrentTheme = (state: RootState) => state.themeSlice.theme;