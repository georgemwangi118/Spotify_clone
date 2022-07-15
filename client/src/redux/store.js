import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice/auth";
import playlistSlice from "./playListSlice/playList";
import audioPlayer from "./audioPlayer/audioPlayer";
import userSlice from "./userSlice/user";

const reducers = combineReducers({
  auth: authReducer,
  playlists: playlistSlice,
  audioPlayer: audioPlayer,
  user: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "audioPlayer"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
