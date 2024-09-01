import usersReducer from "./users";

export interface RootSlices {
  users: ReturnType<typeof usersReducer>;
}

export default {
  users: usersReducer,
};
