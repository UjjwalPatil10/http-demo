import React from "react";
// import data from "./Products.json";
const Products = ({ id, title, brand, price, rating, thumbnail, stock }) => {
  return (
    <div
      style={{ width: 250, padding: 5, margin: 5, border: "1px solid #000" }}
    >
      <img src={thumbnail} alt="" style={{ width: "100%", height: 200 }} />
      <h3>
        {id}-{title}
      </h3>
      <h4>Brand:{brand}</h4>
      <h4>Price:{price}</h4>
      <h4>Stock:{stock}</h4>
      <p>Rating:{rating}</p>
    </div>
  );
};

export default Products;
