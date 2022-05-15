import React from "react";
import { useParams } from "react-router-dom";


const Category = () => {
  const params = useParams();
  console.log(params.categoryName);
  
  return <div>Category - {params.categoryName}  </div>;
};

export default Category;
