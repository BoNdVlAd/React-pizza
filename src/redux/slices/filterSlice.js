import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categoryId: 0,
  pageCount: 1,
  sortPrice: 0,
  sortId: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortId(state, action) {
      state.sortId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
    setSortPrice(state, action) {
      state.sortPrice = action.payload;
    },
    setFilters(state, action) {
      state.pageCount = Number(action.payload.pageCount);
      state.categoryId = Number(action.payload.categoryId);
      state.sortId = Number(action.payload.sortId);
      state.sortPrice = Number(action.payload.sortPrice);
    },
  },
});
export const itemSelector = (id) => (state) => state.cart.items.find((obj) => obj.id === id);
export const filterSelector = (state) => state.filter;
export const { setCategoryId, setSortId, setPageCount, setFilters, setSortPrice, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
