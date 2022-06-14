import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productValue, setProductValue] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(true);
  const [orders, setOrders] = useState([]);
  const [orderValue, setOrderValue] = useState(true);
  const [sliders, setSliders] = useState([]);
  const [sliderValue, setSliderValue] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [featuredProductValue, setFeaturedProductValue] = useState(true);


  useEffect(() => {
    axios("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log("Error!!!"));
  }, [productValue]);

  useEffect(() => {
    axios("http://localhost:3000/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.log("Error!!!"));
  }, [orderValue]);

  useEffect(() => {
    axios("http://localhost:3000/sliders")
      .then((res) => { 
        setSliders(res.data);
      })
      .catch((err) => console.log("Error!!!"));
  }, [sliderValue]);

  useEffect(() => {
    axios("http://localhost:3000/featuredProducts")
      .then((res) => {
        setFeaturedProducts(res.data);
      })
      .catch((err) => console.log("Error!!!"));
  }, [featuredProductValue]);


  const values = {
    products,
    setProducts,
    productValue,
    setProductValue,
    cart,
    setCart,
    cartValue,
    setCartValue,
    orders,
    setOrders,
    orderValue,
    setOrderValue,
    sliders,
    setSliders,
    sliderValue,
    setSliderValue,
    featuredProducts,
    setFeaturedProducts,
    featuredProductValue,
    setFeaturedProductValue,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
