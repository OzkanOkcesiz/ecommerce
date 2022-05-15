import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productValue, setProductValue] = useState(true);

  useEffect(() => {
    axios("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log("Error!!!"));
  }, [productValue]);


  const values = {
    products,
    setProducts,
    productValue,
    setProductValue,
  };

  return (
    <ProductContext.Provider value={values}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
