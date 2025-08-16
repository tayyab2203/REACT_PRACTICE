import React from "react";

const MapPractice = () => {
  const cart = [
    {
      name: "Laptop",
      price: 120000,
    },
    {
      name: "Mobile",
      price: 60000,
    },
    {
      name: "Headphones",
      price: 4000,
    },
  ];
  return (
    <>
      <div>MapPractice</div>
      <hr />
      <h3 className="bg-amber-200 rounded-xl p-3 m-2 hover:bg-amber-400 transition text-black">
        list of Products
      </h3>
      <ul>
        {cart.map((item) => (
          <li className="bg-teal-500 rounded-xl m-3 p-2 hover:bg-teal-300 hover:text-black transition">
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MapPractice;
