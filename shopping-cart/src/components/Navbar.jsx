import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => {
    return store.cart.amount;
  });

  console.log(amount);

  return (
    <nav className="z-2">
      <div className="nav-center">
        <h3>redux tooolkit</h3>
        <div className="nav-container">
          <CartIcon></CartIcon>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
