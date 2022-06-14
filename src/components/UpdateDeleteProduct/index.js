import axios from "axios";
import React, { useState } from "react";
import { Card, Form, ListGroupItem } from "react-bootstrap";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";
import Pagination from "../Pagination";
import UpdateButton from "../UpdateButton";

const UpdateDeleteProduct = () => {
  const { categories } = useCategory();
  const { products } = useProduct();
  const [changeCategory, setChangeCategory] = useState();
  const { productValue, setProductValue } = useProduct();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  const [productSearchValue, setProductSearchValue] = useState("");

  const productSearch = (e) => {
    setProductSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const selectChange = (e) => {
    setChangeCategory(e.target.value);
  };

  const deleteProduct = (e) => {
    axios
      .delete(`http://localhost:3000/products/${e.target.id}`)
      .then((res) => {
        setProductValue(!productValue);
        console.log(res);
      })
      .catch((err) => {
        setProductValue(!productValue);
        console.log(err);
      });
    console.log(e.target.id);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products
    .filter((product) => product.categoryId === changeCategory && product.name.toLocaleLowerCase('tr').includes(productSearchValue.toLocaleLowerCase('tr')))
    .slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(
    products.filter((product) => product.categoryId === changeCategory && product.name.toLocaleLowerCase("tr").includes(productSearchValue.toLocaleLowerCase("tr")) ).length /
      productsPerPage
  );

  return (
    <div className="update-product">
      <form className="update-product-form">
        <select
          name={"categoryValue"}
          onChange={selectChange}
          className="form-select"
        >
          <option defaultValue={"selected"}>Lütfen Kategori Seçin</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <Form.Control type="search" placeholder="Ürün Ara" onChange={productSearch} />
      </form>
      <hr />
      <div className="update-product-content">
        {currentProducts.map((product) => (
          <Card key={product.id} id={product.id}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <div className="card-author">{product.author}</div>
            </Card.Body>
            <ListGroupItem>{product.publisher}</ListGroupItem>
            <ListGroupItem>
              {product.price}
              <span>TL</span>
            </ListGroupItem>

            <div className="card-buttons">
              <UpdateButton className="product-update-btn" product={product} />

              <button
                id={product.id}
                className="product-remove-btn"
                onClick={deleteProduct}
              >
                <i
                  id={product.id}
                  className="fa fa-trash"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </Card>
        ))}
        {changeCategory &&
        changeCategory !== "Lütfen Kategori Seçin" &&
        currentProducts.length
        ? (
          <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
        ) : null}
      </div>
    </div>
  );
};

export default UpdateDeleteProduct;
