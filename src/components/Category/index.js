import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";

const Category = () => {
  const params = useParams();
  const { products } = useProduct();
  const { cart, setCart } = useProduct();

  const addToCart = (product) => {
    let addedItem = cart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    console.log(product.id);
    console.log(addedItem);
  };

  console.log(cart);

  return (
    <div className="product-content">
      {products
        .filter((product) => product.categoryId === params.categoryId)
        .map((product) => (
          <Card key={product.id} id={product.id} style={{ width: "13rem" }}>
            <Card.Img variant="top" width={"50px"} src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{product.author}</ListGroupItem>
              <ListGroupItem>{product.publisher}</ListGroupItem>
              <ListGroupItem>
                {product.price}
                <span>TL</span>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button
                onClick={() => {
                  addToCart(product);
                }}
                id={product.id}
                variant="success"
              >
                Sepete Ekle
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Category;
