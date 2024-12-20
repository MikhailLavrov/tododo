import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "Незнакомец",
  } as UserState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
})

export const { setName } = userSlice.actions;
export default userSlice.reducer;
