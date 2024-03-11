import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, calculateAmount } from "../../features/cart/cartSlice";
import { openModal } from "../../features/cart/modalSlice";
import Modal from "./Modal";

const CartContainer = () => {
  // uses useSelector
  const { cartitems, amount, total } = useSelector((store) => {
    return store.cart;
  });
  // use dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmount());
  }, [cartitems]);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empy</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>

      <div>
        {cartitems.map((item) => {
          return <CartItem key={item.id} item={item}></CartItem>;
        })}
      </div>
      <footer>
        <hr></hr>
        <div className="cart-total">
          <h4>
            total<span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
