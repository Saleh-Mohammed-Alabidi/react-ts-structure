import { configureStore } from "@reduxjs/toolkit";
import reducers, { RootSlices } from "./slices/";
import { decryptData, encryptData } from "../utils";

const store = configureStore({
  reducer: reducers,
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Load state from localStorage
function loadState(): RootSlices | undefined {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    const decryptedState = decryptData(serializedState);
    return decryptedState;
  } catch (err) {
    console.error("Failed to load state from localStorage:", err);
    return undefined;
  }
}

// Save state to localStorage
store.subscribe(() => {
  try {
    const state = store.getState();
    const encryptedState = encryptData(state);
    console.log(state);
    localStorage.setItem("state", encryptedState);
  } catch (err) {
    console.error("Failed to save state to localStorage:", err);
  }
});

export default store;
