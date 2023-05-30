import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    fetchList(state, action) {
      state.data = action.payload;
    },
  },
});

export const { fetchList } = listSlice.actions;
export default listSlice.reducer;

export function getList(pageNo) {
  return async function getListThunk(dispatch) {
    const response = await fetch(
      `https://reqres.in/api/users?page=${pageNo}&per_page=5`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    dispatch(fetchList(data));
  };
}
