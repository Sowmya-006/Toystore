import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductData } from "@/services/api";
import { useCart } from "./CartContext";
import { AiFillHome, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import toast, { Toaster } from "react-hot-toast";
import "./UserProduct.css";

const ToyProduct = () => {
  const [productList, setProductList] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    shape: { spaceship: false, house: false, track: false, robot: false, gun: false },
    color: { black: false, pink: false, red: false, blue: false, orange: false },
    size: { small: false, medium: false, large: false },
    price: { lessThan2000: false, lessThan3000: false },
  });

  const { addToCart } = useCart();
  const handleCart = (product) => {
    toast.success("Added to cart");
    addToCart(product);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ProductData();
        setProductList(res?.data || []);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleFilter = (filter, subFilter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: {
        ...prevFilters[filter],
        [subFilter]: !prevFilters[filter][subFilter],
      },
    }));
  };

  const getFilteredProducts = () => {
    return productList.filter((product) => {
      const { size, color, shape, price } = selectedFilters;

      const matchesSize = Object.entries(size).some(
        ([key, value]) => value && product.size.toLowerCase() === key
      );

      const matchesColor = Object.entries(color).some(
        ([key, value]) => value && product.color.toLowerCase() === key
      );

      const matchesShape = Object.entries(shape).some(
        ([key, value]) => value && product.shape.toLowerCase() === key
      );

      const matchesPrice =
        (price.lessThan2000 && product.price < 2000) ||
        (price.lessThan3000 && product.price < 3000) ||
        (!price.lessThan2000 && !price.lessThan3000);

      return (
        (matchesSize || Object.values(size).every((v) => !v)) &&
        (matchesColor || Object.values(color).every((v) => !v)) &&
        (matchesShape || Object.values(shape).every((v) => !v)) &&
        matchesPrice
      );
    });
  };

  const filteredProducts = getFilteredProducts();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="toy-page">
      <nav className="navbar">
        <AiFillHome onClick={() => handleNavigation("/shopbycategory")} className="icon" />
        <AiOutlineSearch className="icon" />
        <AiOutlineHeart className="icon" />
        <AiOutlineShoppingCart onClick={() => handleNavigation("/cart")} className="icon" />
      </nav>
      
      <main className="products">
        <div className="product-header">
          <h2>PLAYTHINGS</h2>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              
              <div className="product-info">
                <h6 className="font-bold size">{product.name}</h6>
                <p>{product.description}</p>
                <p className="font-BalooChettan2">Price: ₹{product.price}</p>
                <p className="font-BalooChettan2">Color: {product.color}</p>
              </div>

              <div className="icon-container">
              <AiOutlineHeart className="icon wishlist" />
                <AiOutlineShoppingCart className="icon cart" onClick={() => handleCart(product)} />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Toaster />
    </div>
  );
};

export default ToyProduct;
