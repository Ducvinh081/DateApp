import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicationConfig, defaultConfig } from '../../config/DefaultConfig';
import { ThemeKey } from "../../config/themes";
import { LanguageKey } from "../../config/languages";

// Define initial state
const initialState: ApplicationConfig = defaultConfig;

// Create a slice
const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeKey>) => {
      state.constants.selectedTheme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LanguageKey>) => {
      state.constants.selectedLanguage = action.payload;
    },
  },
});

// Export actions
export const { setTheme, setLanguage } = configSlice.actions;

// Export reducer
export default configSlice.reducer;
