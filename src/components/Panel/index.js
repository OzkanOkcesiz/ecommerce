import React from "react";
import {
  Accordion,
  Button,
  Col,
  ListGroup,
  NavLink,
  Row,
  Tab,
} from "react-bootstrap";
import AddCategory from "../AddCategory";
import AddProduct from "../AddProduct";
import DeleteCategory from "../DeleteCategory";
import UpdateCategory from "../UpdateCategory";
import UpdateDeleteProduct from "../UpdateDeleteProduct";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import axios from "axios";

const Panel = () => {
  const { orders, setOrders } = useProduct();
  const { orderValue, setOrderValue } = useProduct();

  const removeOrder = (id) => {
    axios
        .delete(`http://localhost:3000/orders/${id}`)
        .then((res) => {
          setOrderValue(!orderValue);
          console.log(res);
        })
        .catch((err) => {
          setOrderValue(!orderValue);
          console.log(err);
        });
  }
  
  return (
    <div className="container panel">
      <Link to="/">E-COMMERCE</Link>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#PanelOrders">
        <Row>
          <Col sm={3}>
            <Accordion>
              <NavLink href="#PanelOrders" className="panel-order-btn">
                Siparişler
              </NavLink>
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
              <Tab.Pane eventKey="#PanelOrders">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Ad - Soyad</th>
                      <th scope="col">Email</th>
                      <th scope="col">Telefon</th>
                      <th scope="col">Adres</th>
                      <th scope="col">Tutar</th>
                      <th scope="col">Sipariş Sil</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders.map((order) => (
                        <tr key={order.id}>
                        <th scope="row">{order.id}</th>
                        <td>{order.customerName} {order.customerSurname}</td>
                        <td>{order.customerEmail}</td>
                        <td>{order.customerPhone}</td>
                        <td>{order.customerAddress}</td>
                        <td>{`${order.customerProducts.reduce((a, b) => a + b.productPrice * b.productQuantity, 0).toFixed(2)} TL`}</td>
                        <td onClick={() => {
                          removeOrder(order.id);
                        }}><Button>Sil</Button></td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
              </Tab.Pane>
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
