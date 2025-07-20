import { configureStore } from "@reduxjs/toolkit";

// Placeholder reducer to avoid warning
interface PlaceholderAction {
  type: string
}

function placeholderReducer(state = {}, action: PlaceholderAction) {
  return state
}

export const store = configureStore({
  reducer: {
    placeholder: placeholderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
