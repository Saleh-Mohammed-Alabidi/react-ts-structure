import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../api/usecase/users/IUserRespository";
import UsersUseCase from "../../api/usecase/users/users";

interface Users {
  users: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: Users = {
  users: [],
  loading: false,
  error: null,
};

interface FetchUsersResponse {
  users: IUser[];
}

export const fetchUsers = createAsyncThunk<FetchUsersResponse, void>(
  "fetchUsers",
  async (_, thunkAPI) => {
    try {
      return { users: await UsersUseCase.getInstance().getUserData() };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<FetchUsersResponse>) => {
          state.loading = false;
          state.users = action.payload.users;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export default usersSlice.reducer;
