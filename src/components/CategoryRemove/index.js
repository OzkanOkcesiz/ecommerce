import axios from "axios";
import React from "react";
import { useCategory } from "../../context/CategoryContext";

const CategoryRemove = ({ category }) => {
  const { categoryValue, setCategoryValue } = useCategory();

  const handleClick = () => {
    axios
      .delete(`http://localhost:3000/categories/${category.id}`)
      .then((res) => {
        setCategoryValue(!categoryValue);
        console.log(res);
      })
      .catch((err) => {
        setCategoryValue(!categoryValue);
        console.log(err);
      });
    axios
      .delete(`http://localhost:3000/products?categoryId=${category.id}`)
      .then((res) => {
        setCategoryValue(!categoryValue);
        console.log(res);
      })
      .catch((err) => {
        setCategoryValue(!categoryValue);
        console.log(err);
      });
  };
  return (
    <div>
      <button onClick={handleClick} className="category-remove">
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default CategoryRemove;
