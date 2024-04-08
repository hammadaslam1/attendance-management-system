/* eslint-disable no-unused-vars */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
// import themeReducer from "./theme/ThemeSlice";
// import tabReducer from "./tabs/tabSlice";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist";

const rootReducers = combineReducers({
  user: userReducer,
  //   theme: themeReducer,
  //   tab: tabReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
