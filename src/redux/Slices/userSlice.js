import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchUserDetail = createAsyncThunk(
  "api/fetchUserDetail",
  (query, { rejectWithValue }) => {
    try {
      console.log("fetching user details", query);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    role: "",
  },
  reducers: {
    updateRole: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetail.pending, () => {})
      .addCase(fetchUserDetail.fulfilled, () => {})
      .addCase(fetchUserDetail.rejected, () => {});
  },
});

export const { updateRole } = userSlice.actions;
export default userSlice.reducer;
