import React from "react";
import {
  Button,
  Col,
  Dropdown,
  ListGroup,
  Nav,
  Navbar,
  NavLink,
  Row,
  Tab,
} from "react-bootstrap";
import AddCategory from "../AddCategory";
import AddProduct from "../AddProduct";
import UpdateCategory from "../UpdateCategory";
import UpdateDeleteProduct from "../UpdateDeleteProduct";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import axios from "axios";
import Dashboard from "../Dashboard";
import Orders from "../Orders";
import PanelCategories from "../PanelCategories";

const Panel = () => {
  return (
    <div className="panel">
      <Navbar className="panel-navbar" expand="lg">
        <Navbar.Collapse>
          <Nav className="me-auto panel-header">
            <NavLink className="panel-header-title" to="/">
              E-COMMERCE
            </NavLink>
            <Dropdown>
              <Dropdown.Toggle
                className="panel-header-dropdown"
                id="dropdown-basic"
              >
                <i className="fa-solid fa-user"></i> Admin
              </Dropdown.Toggle>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Tab.Container defaultActiveKey="#Dashboard">
        <div className="panel-content">
          <Col className="panel-sidebar" sm={2}>
            <NavLink href="#Dashboard" className="panel-sidebar-item">
              Dashboard <i className="fa-solid fa-chart-line"></i>
            </NavLink>
            <NavLink href="#PanelOrders" className="panel-sidebar-item">
              Siparişler <i className="fa-solid fa-cart-arrow-down"></i>
            </NavLink>
            <NavLink href="#Categories" className="panel-sidebar-item">
              Kategori <i className="fa-solid fa-tags"></i>
            </NavLink>
            <NavLink href="#PanelOrders" className="panel-sidebar-item">
              Ürünler <i className="fa-solid fa-tag"></i>
            </NavLink>
            <NavLink href="#PanelOrders" className="panel-sidebar-item">
              Anasayfa <i className="fa-solid fa-house"></i>
            </NavLink>
          </Col>
          <Col className="panel-content-box" sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="#Dashboard">
                <Dashboard />
              </Tab.Pane>
              <Tab.Pane eventKey="#PanelOrders">
                <Orders />
              </Tab.Pane>
              <Tab.Pane eventKey="#Categories">
              <PanelCategories />
              </Tab.Pane>
              <Tab.Pane eventKey="#AddProduct">
                <AddProduct />
              </Tab.Pane>
              <Tab.Pane eventKey="#UpdateDeleteProduct">
                <UpdateDeleteProduct />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </div>
      </Tab.Container>
    </div>
  );
};

export default Panel;
