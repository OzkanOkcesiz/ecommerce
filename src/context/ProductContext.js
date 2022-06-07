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
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
