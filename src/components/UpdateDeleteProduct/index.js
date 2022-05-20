import React, { useState } from "react";
import { Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";
import UpdateButton from "../UpdateButton.js";

const UpdateDeleteProduct = () => {
  const { categories } = useCategory();
  const { products } = useProduct();
  const [changeCategory, setChangeCategory] = useState();

  const selectChange = (e) => {
    setChangeCategory(e.target.value);
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
                <ListGroupItem>{product.price}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">
                  <UpdateButton product={product} />
                </Card.Link>
                <Card.Link href="#">Sil</Card.Link>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default UpdateDeleteProduct;
