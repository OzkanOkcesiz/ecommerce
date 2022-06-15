import React from "react";
import { useState } from "react";
import { Card, Carousel, CarouselItem, ListGroup, ListGroupItem } from "react-bootstrap";
import { useProduct } from "../../context/ProductContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeContent = () => {
  const [index, setIndex] = useState(0);
  const { sliders } = useProduct();
  const { featuredProducts } = useProduct();
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

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homecontent-cotainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {sliders.map((slider, index) => (
          <CarouselItem key={index}>
            <img className="d-block w-100" src={slider.img} alt="" />
          </CarouselItem>
        ))}
      </Carousel>

      {featuredProducts.length !==0  && <div className="productContainer">
        <h2 className="product-title">Öne Çıkan Ürünler</h2>
        <div className="product-content">
          {featuredProducts.map((product) => (
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
      </div>}
    </div>
  );
};

export default HomeContent;
