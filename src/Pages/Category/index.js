import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Category = () => {
  const params = useParams();
  const { products } = useProduct();
  const { cart, setCart } = useProduct();
  const notifyAdd = (product) => toast.success( `${product.name} Sepete Eklendi!`, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

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
    <div>
      <Header />
      <div className="category-container">
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
                    {`${product.price} TL`}
                  </ListGroupItem>
                </ListGroup>

                <button
                  className="card-button"
                  onClick={() => {
                    addToCart(product);
                    notifyAdd(product);
                  }}
                  id={product.id}
                >
                  Sepete Ekle
                </button>
              </Card>
            ))}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </div>
  );
};

export default Category;
