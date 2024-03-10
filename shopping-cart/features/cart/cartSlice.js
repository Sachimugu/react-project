import { createSlice } from "@reduxjs/toolkit";
import cartitems from "../../cartItems";

// innital state
const initialState = {
  cartitems: cartitems,
  amount: 3,
  total: 0,
  isLoading: true,
};

// actions
// clearCartFunction
const clearCartFunction = (state) => {
  return { ...state, cartitems: [] };
};

// removeItemFunction
const removeItemFunction = (state, action) => {
  const itemId = action.payload;
  const newCartItems = state.cartitems.filter((item) => {
    return item.id != itemId;
  });
  return { ...state, cartitems: newCartItems };
};

// increaseCartFunction
const increaseItemFunction = (state, action) => {
  const itemId = action.payload;
  const newCartItems = state.cartitems.map((item) => {
    if (item.id === itemId) {
      return { ...item, amount: item.amount + 1 };
    } else {
      return item;
    }
  });
  return { ...state, cartitems: newCartItems };
};
// decreaseItemFunction
const decreaseItemFunction = (state, action) => {
  const itemId = action.payload;
  const newCartItems = state.cartitems.map((item) => {
    if (item.id === itemId && item.amount > 0) {
      return { ...item, amount: item.amount - 1 };
    } else {
      return item;
    }
  });
  return { ...state, cartitems: newCartItems };
};

// amount

const amountFunction = (state) => {
  let amount = 0;
  let totalprice = 0;

  state.cartitems.forEach((item) => {
    amount += item.amount; 
    totalprice += item.price * item.amount;
  });
  state.amount = amount;
  state.total = totalprice;
};

// slice
const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    clearCart: clearCartFunction,
    removeItem: removeItemFunction,
    increaseItem: increaseItemFunction,
    decreaseItem: decreaseItemFunction,
    calculateAmount: amountFunction,
  },
});

console.log(cartSlice);
// console.log(cartSlice);
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
