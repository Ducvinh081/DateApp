import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./reducers/config";

// Tạo store với reducers đã kết hợp
const store = configureStore({
  reducer: {
    config: configReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
