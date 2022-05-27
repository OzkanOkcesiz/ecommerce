import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";
import UpdateButton from "../UpdateButton";

const UpdateDeleteProduct = () => {
  const { categories } = useCategory();
  const { products } = useProduct();
  const [changeCategory, setChangeCategory] = useState();
  const { productValue, setProductValue } = useProduct();

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

  return (
    <div className="update-product">
      <Form>
        <select
          name={"categoryValue"}
          onChange={selectChange}
          className="form-select"
        >
          <option defaultValue={"selected"}>Lütfen Kategori Seçin</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {" "}
              {category.categoryName}{" "}
            </option>
          ))}
        </select>
      </Form>
      <hr />

      <div className="update-product-content">
        {products
          .filter((product) => product.categoryId === changeCategory)
          .map((product) => (
            <Card key={product.id} id={product.id} style={{ width: "13rem" }}>
              <Card.Img variant="top" width={"50px"} src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{product.author}</ListGroupItem>
                <ListGroupItem>{product.publisher}</ListGroupItem>
                <ListGroupItem>{product.price}<span>TL</span></ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">
                  <UpdateButton product={product} />
                </Card.Link>
                <Button
                  id={product.id}
                  variant="danger"
                  onClick={deleteProduct}
                >
                  Sil
                </Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default UpdateDeleteProduct;
