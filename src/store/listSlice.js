import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: "",
  message: "",
  pageNumber: 0,
};

const listSlice = createSlice({
  name: "List",
  initialState,
  reducers: {
    fetchList(state, action) {
      state.data = action.payload;
      state.pageNumber = action.payload.page;
    },
  },
});

export const { fetchList } = listSlice.actions;
export default listSlice.reducer;

export function getList(pageNo = 1) {
  return async function getListThunk(dispatch) {
    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${pageNo}&per_page=5`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      dispatch(fetchList(data));
    } catch (error) {
      dispatch(fetchList([]));
    }
  };
}
