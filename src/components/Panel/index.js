import React from "react";
import { Accordion, Col, ListGroup, Row, Tab } from "react-bootstrap";
import AddCategory from "../AddCategory";
import AddProduct from "../AddProduct";
import DeleteCategory from "../DeleteCategory";
import UpdateCategory from "../UpdateCategory";
import UpdateDeleteProduct from "../UpdateDeleteProduct";
import { Link } from "react-router-dom";

const Panel = () => {
  return (
    <div className="container panel">
       <Link to="/">E-COMMERCE</Link>
      <Tab.Container
        id="list-group-tabs-example"
        defaultActiveKey="#"
      >
        <Row>
          <Col sm={3}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Kategori</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item action href="#AddCategory">
                      Kategori Ekle
                    </ListGroup.Item>
                    <ListGroup.Item action href="#UpdateCategory">
                      Kategori Güncelle
                    </ListGroup.Item>
                    <ListGroup.Item action href="#DeleteCategory">
                      Kategori Sil
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Ürün</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item action href="#AddProduct">
                      Ürün Ekle
                    </ListGroup.Item>
                    <ListGroup.Item action href="#UpdateDeleteProduct">
                      Ürün Güncelle / Sil
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="content-box" sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="#AddCategory">
                <AddCategory />
              </Tab.Pane>
              <Tab.Pane eventKey="#UpdateCategory">
                <UpdateCategory />
              </Tab.Pane>
              <Tab.Pane eventKey="#DeleteCategory">
                <DeleteCategory />
              </Tab.Pane>
              <Tab.Pane eventKey="#AddProduct">
                <AddProduct />
              </Tab.Pane>
              <Tab.Pane eventKey="#UpdateDeleteProduct">
                <UpdateDeleteProduct />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Panel;
