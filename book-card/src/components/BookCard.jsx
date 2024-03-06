import React from "react";

const BookCard = (props) => {
  const { title, author, price, img, id } = props.book;
  return (
    <div className=" bg-white p-10 relative">
      <img src={img} alt={title}></img>
      <div className="text-center">
        <h3 className="font-bold">{title}</h3>

        <h4 className="">{author}</h4>
        <h4 className="font-bold text-green-500">{`$${price}`}</h4>
        <h4 className="absolute top-0 left-0 bg-gray-800 font-bold rounded-b-lg rounded-r-lg p-1 text-white">{id}</h4>
      </div>
    </div>
  );
};

export default BookCard;
