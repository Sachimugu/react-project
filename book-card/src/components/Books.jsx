import React from "react";
import { data } from "../data";
import BookCard from "./BookCard";

const Books = () => {
  return (
    <div className="max-w-5xl m-auto  min-h-screen bg-slate-100">
      <div className="pt-8 grid grid-cols-3 gap-6 place-items-center">
        {data.map((book, index) => {
          return <BookCard key={index} book={book}></BookCard>;
        })}
      </div>
    </div>
  );
};

export default Books;
