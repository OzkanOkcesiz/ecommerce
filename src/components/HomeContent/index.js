import React from "react";
import { useState } from "react";
import { Card, Carousel, ListGroup, ListGroupItem } from "react-bootstrap";

const HomeContent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/banner/banner-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/banner/banner-2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/banner/banner-3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Card  */}

      <div className="home-cards-1">
        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>
      </div>

      <div className="home-cards-2">
        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>

        <Card>
          <img
            className="card-image"
            alt=""
            src={"../images/products/001.jpg"}
          />
          <Card.Title>{"Kitap İsmi"}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="card-author">
              {"Yazar İsmi"}
            </ListGroupItem>
            <ListGroupItem className="card-publisher">
              {"Yayın Evi"}
            </ListGroupItem>
            <ListGroupItem className="card-price">
              {"Fiyat"}
              <span>TL</span>
            </ListGroupItem>
          </ListGroup>

          <button className="card-button" variant="success">
            Sepete Ekle
          </button>
        </Card>
      </div>
    </div>
  );
};

export default HomeContent;
