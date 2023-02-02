import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AccordionFilter from "../components/Home/AcordionFilter";
// import CategoryFilter from '../components/Home/CategoryFilter';
// import PriceFilter from '../components/Home/PriceFilter';
import ProductCard from "../components/Home/ProductCard";
import SearchIcon from "@mui/icons-material/Search";
// import OrderProductsPerPrice from '../components/Home/OrderProductsPerPrice'
import "./styles/home.css";
// import { Col, Row } from 'react-bootstrap';
import SortProductsPerPrice from "../components/Home/SortProductsPerPrice";

const Home = () => {
  const products = useSelector((state) => state.products);
  const [searchedProducts, setSearchedProducts] = useState();
  const [filterFrom, setFilterFrom] = useState(0);
  const [filterTo, setFilterTo] = useState(Number.POSITIVE_INFINITY);
  const [inputSearchValue, setInputSearchValue] = useState("");
  const isLoading = useSelector((state) => state.isLoading);
  // console.log('isLoadinf', isLoading);

  useEffect(() => {
    if (products) {
      setSearchedProducts(products);
    }
  }, [products]);

  /*  Seach input will filter all the products that contain the users input, the search is 
        made in the product title, brand and category to avoid missing products in  any way */
  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    const inputSearch = products?.filter(
      (prod) =>
        prod.title.toLowerCase().includes(inputValue) ||
        prod.brand.toLowerCase().includes(inputValue) ||
        prod.category.name.toLowerCase().includes(inputValue)
    );
    setSearchedProducts(inputSearch);
    setInputSearchValue(e.target.value);
  };
  // First filters products by price, in case the user doesn't enter values into price, then products that are between 0 to infinity all listed
  const productsFilteredByPrice = searchedProducts?.filter(
    (prod) => +prod.price >= filterFrom && +prod.price <= filterTo
  );

  return (
    <div className="home">
      <div className="search__section">
        <div className="search__input__container">
          <input
            value={inputSearchValue}
            onChange={handleChange}
            className="searchInput"
            type="text"
            placeholder="What are you looking for?"
          />
          <SearchIcon className="search__icon" />
        </div>
      </div>
      <SortProductsPerPrice />
      <div className="products__body__container">
        {/* <OrderProductsPerPrice /> */}
            <AccordionFilter setFilterFrom={setFilterFrom} setFilterTo={setFilterTo} setInputSearchValue={setInputSearchValue} />

            <div className="products__container">
                {productsFilteredByPrice && productsFilteredByPrice?.length !== 0
                    ? // Renders all the products after they are filtered by price
                    productsFilteredByPrice?.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                    : !isLoading && (
                        <h5 className="filter__criteria__message">
                        There are no products available within this search criteria.
                        </h5>
                    )}
            </div>
      </div>
    </div>
  );
};

export default Home;
