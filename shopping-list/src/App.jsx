import React, { useState } from "react";
import { shoppingList } from "./data";
import { MdDeleteOutline } from "react-icons/md";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
const App = () => {

  const [data, setData] =useState(shoppingList)

  const handledelete = (id) => {

    const newshoppingList = data.filter((item) => {
      return item.id != id;
    });
    setData(newshoppingList)
   }
    
  
  return (
    <div className="max-w-5xl  m-auto py-4">
      <div className="grid  font-bold text-white place-items-center  grid-cols-3 p-4 bg-gray-600 my-4 rounded-md">
        <h1>Item</h1>
        <h1>Price</h1>
        <h1>Delete</h1>
      </div>
      {data.map((item) => {
        return (
          <ItemCard
            key={item.price}
            item={item}
            handledelete={handledelete}
          ></ItemCard>
        );
      })}
    </div>
  );
};

const ItemCard = (props) => {
  const { item, price, id } = props.item;
  const handledelete = props.handledelete

  
  return (
    <>
      <div className="grid place-items-center  grid-cols-3 p-4 bg-blue-100 my-4 rounded-md">
        <div>{item}</div>
        <div>{price}</div>

        <div className="">
          <button onClick={()=>handledelete(id)} className="text-red-400 hover:text-red-800">
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
