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
      Çok Satanlar
      {/* Card  */}
      <div className="home-cards-1">
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="home-cards-2">
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src="../images/products/001.jpg" />
          <Card.Body>
            <Card.Title>Kitap İsmi</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Yazar İsmi</ListGroupItem>
            <ListGroupItem>Yayın Evi</ListGroupItem>
            <ListGroupItem>Fiyat</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Sepete Ekle</Card.Link>
            <Card.Link href="#">Hemen Al</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomeContent;
