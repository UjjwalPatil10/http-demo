// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const ProductsLists = () => {
//   const [info, setInfo] = useState([]);
//   const [items, setItems] = useState(info);

//   const loadUser = async () => {
//     const response = await axios.get("https://fakestoreapi.com/products");
//     // const data = response.json();
//     setInfo(response.data);
//     // console.log(data);
//   };

//   useEffect(() => {
//     loadUser();
//     console.log(info);
//   }, []);

//   const onFilterValue = (e) => {
//     console.log(e.target.value);
//     const updatedItems = info.filter((result) => {
//       return result.data.category === e.target.value;
//     });

//     setItems(updatedItems);
//   };

//   // useEffect(() => {
//   //   fetch("https://fakestoreapi.com/products").then((res) => {
//   //     res.json().then((result) => {
//   //       setInfo(result);
//   //       console.log(result);
//   //     });
//   //   });
//   // }, []);
//   return (
//     <div style={{ display: "flex" }}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-start",
//           backgroundColor: "palegreen",
//           height: "800px",
//           padding: "20px",
//         }}
//       >
//         <NavLink
//           style={{ marginBottom: 5 }}
//           onClick={onFilterValue}
//           value="men's clothing"
//         >
//           Mens Clothing
//         </NavLink>
//         <NavLink
//           style={{ marginBottom: 5 }}
//           onClick={onFilterValue}
//           value="jewelery"
//         >
//           Jewelery
//         </NavLink>
//         <NavLink
//           style={{ marginBottom: 5 }}
//           onClick={onFilterValue}
//           value="electronics"
//         >
//           Electronics
//         </NavLink>
//         <NavLink
//           style={{ marginBottom: 5 }}
//           onClick={onFilterValue}
//           value="women's clothing"
//         >
//           women's clothing
//         </NavLink>
//       </div>

//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {info.map(({ id, title, category, brand, price, desc, image }) => {
//           return (
//             <>
//               <div
//                 style={{
//                   width: 250,
//                   padding: 5,
//                   margin: 5,
//                   border: "2px solid #3338",
//                 }}
//               >
//                 <h3>{title}</h3>
//                 <img
//                   src={image}
//                   alt=""
//                   style={{ width: "100%", height: 200 }}
//                 />
//                 <h4>{category}</h4>
//                 <h4>Brand:{brand}</h4>
//                 <h4>Price:{price}</h4>
//                 <p>{desc}</p>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProductsLists;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Products from "./Products";
// import data from "./Productses.json";

// const fetchUsers = async () => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       // response.data is the response body
//       console.log("Data:", response.data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

const ProductLists = () => {
  // const [SearchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const loadUsers = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // const data = await response.json();
    setProducts(response.data);
    // console.log(data);
  };
  useEffect(() => {
    loadUsers();

    // const response = await axios.get("https://fakestoreapi.com/products");
    // const data = await response.json();
    // console.log("response", data);
    // setProducts(data);
    // const category = SearchParams.get("category");
    // const brand = SearchParams.get("brand");
    // const arr = SearchParams.get(arr);
    // console.log("brand: ", brand);
    // console.log("category: ", category);
    // console.log("arr: ", arr);
    // let fdata = []; //here we use 'let' because here we assigned data to it. if we use 'const 'here so we cannot assigned data to it because 'const' is keyword we cannot assigned,modified to it so we get Uncaught TypeError: Assignment to constant variable.

    // if (brand && category) {
    //   fdata = data.filter(
    //     (prod) =>
    //       (prod.category == category || category == "all") &&
    //       (prod.brand == brand || brand == "all")
    //   );
    // } else if (category) {
    //   fdata = data.filter((prod) => prod.category == category);
    // } else if (brand) {
    //   fdata = data.filter((prod) => prod.brand == brand);
    // } else {
    //   fdata = data;
    // }

    // // console.log("fdata: ", fdata);
    // if (Array.isArray(fdata)) setProducts(fdata);
  }, []);
  return (
    <>
      <h3>Product List</h3>
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(products) &&
          products?.map((prod) => <Products key={prod.id} {...prod} />)}
      </section>
    </>
  );
};

export default ProductLists;
