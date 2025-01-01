import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { items: [] }, // Keep the items array inside an object
  reducers: {
    AddItem: (state, action) => {
      state.items.push(action.payload); // Add item to the items array
    },
    RemoveItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // Remove item by id
    },
  },
});

export const { AddItem, RemoveItem } = CartSlice.actions;
export default CartSlice.reducer;
