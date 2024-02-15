import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center p-4">Book Card Project</h1>
      <div className=" grid md:grid-cols-3 md:gap-4 lg:grid-cols-4">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      </div>
    </>
  );
}

import React from "react";

const Book = () => {
  return (
    <div className="p-4 bg-gray-100 flex flex-col justify-center items-center">
      <img
        src="https://m.media-amazon.com/images/I/81fcL3DIItL._SY466_.jpg"
        width={220}
        height={250}
      ></img>
      <h3 className="text-lg text-center">
        The Monishier Daughters The Monishier Daughters The Monishier Daughters
      </h3>
      <p className="text-sm text-green-800">200$</p>
    </div>
  );
};

export default App;
