import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState(true);

  useEffect(() => {
    axios("http://localhost:3000/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, [categoryValue]);



  const values = {
    categories,
    setCategories,
    categoryValue,
    setCategoryValue,


  };



  return (
    <CategoryContext.Provider value={values}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
