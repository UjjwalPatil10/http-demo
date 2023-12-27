import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductLists from "./ProductLists";
import data from "./Productses.json";

const SearchParameterses = () => {
  // below we give filter logic so we just add that filter part in addressbar and see in ProductList what we add in addressbar
  // on that basis we do change
  // Whatever data we add in addressbar(URL) i.e append in URL we called Search Parameters
  // and for that in reactjs there is useSearchParams() hook
  // const SearchParams: URLSearchParams
  const [SearchParams, setSearchParams] = useSearchParams(); // SearchParams all parameters after ? will be maintained(stoted) https://www.amazon.in/Books/b/?ie=UTF8&node=9761015&ref_nav_cs_books
  const [searchResult, setSearchResults] = useState({});
  const handleBrandFilter = (brand) => {
    SearchParams.set("brand", brand);
    setSearchParams(SearchParams);
  };
  const handleCategoryFilter = (cat) => {
    SearchParams.set("category", cat);
    setSearchParams(SearchParams);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const pattern = new RegExp(value, "gi"); //for search operation we use pattern and .test()
    const arr = data?.filter(
      (u) =>
        pattern.test(u.title) ||
        pattern.test(u.brand) ||
        pattern.test(u.category) ||
        pattern.test(u.id)
    );
    // searchResult.set("arr:", arr);
    setSearchResults(searchResult);

    // SearchParams.set("arr", arr);
    console.log("arr: ", arr);

    // setSearchParams(SearchParams);
  };
  return (
    <>
      <h3>Search Parameters</h3>
      <section style={{ display: "flex" }}>
        <div style={{ maxWidth: 300, padding: 10 }}>
          <h3>Product Filter</h3>
          <h3>categories</h3>

          <b style={{ fontSize: "20px" }}>Search:</b>
          <input type="text" onChange={handleSearch} />
          <ul>
            <li onClick={() => handleCategoryFilter("all")}>All categories</li>
            <li onClick={() => handleCategoryFilter("home-decoration")}>
              Home Decoration
            </li>
            <li onClick={() => handleCategoryFilter("groceries")}>Groceries</li>
            <li onClick={() => handleCategoryFilter("skincare")}>Skincare</li>
            <li onClick={() => handleCategoryFilter("fragrances")}>
              Fragrances
            </li>
          </ul>
          <hr />

          <h4>Brands</h4>
          <ul>
            <li onClick={() => handleBrandFilter("all")}>All Brands</li>
            <li onClick={() => handleBrandFilter("Apple")}>Apple</li>
            <li onClick={() => handleBrandFilter("Samsung")}>Samsung</li>
            <li onClick={() => handleBrandFilter("Golden")}>Golden</li>
            <li onClick={() => handleBrandFilter("Luxury palace")}>
              Luxury Palace
            </li>
          </ul>
        </div>
        <div style={{ flex: "1 1 auto", minHeight: "100vh" }}>
          <ProductLists />
        </div>
      </section>
    </>
  );
};

export default SearchParameterses;
