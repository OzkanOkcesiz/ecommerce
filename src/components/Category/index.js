import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
  };

  return (
    <div className="productContainer">
      {products
        .filter((product) => product.categoryId === params.categoryId)
        .map((product) => (
          <Card key={product.id} id={product.id}>
            <img className="card-image" alt="" src={product.img} />
            <Card.Title>{product.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="card-author">
                {product.author}
              </ListGroupItem>
              <ListGroupItem className="card-publisher">
                {product.publisher}
              </ListGroupItem>
              <ListGroupItem className="card-price">
                {product.price}
                <span>TL</span>
              </ListGroupItem>
            </ListGroup>

            <button
              className="card-button"
              onClick={() => {
                addToCart(product);
              }}
              id={product.id}
              variant="success"
            >
              Sepete Ekle
            </button>
          </Card>
        ))}
    </div>
  );
};

export default Category;
