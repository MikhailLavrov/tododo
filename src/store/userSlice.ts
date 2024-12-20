import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
}

const getUserNameFromLocalStorage = (): UserState => {
  const userName = localStorage.getItem("userName");
  return { userName: userName ? JSON.parse(userName) : "Незнакомец" };
};

const initialState: UserState = getUserNameFromLocalStorage();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      const userName = action.payload;
      if (!userName || userName.trim() === "") {
        state.userName = initialState.userName;
      } else {
        state.userName = userName;
      }
      localStorage.setItem("userName", JSON.stringify(state.userName));
    },
  },
});

export const { setName } = userSlice.actions;
export default userSlice.reducer;
