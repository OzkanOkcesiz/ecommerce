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

import Dashboard from "../../components/Dashboard/index";
import Orders from "../../components/Orders/index";
import PanelCategories from "../../components/PanelCategories/index";
import PanelProducts from "../../components/PanelProducts/index";
import PanelHomeContent from "../../components/PanelHomeContent/index";


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
            <NavLink href="#Products" className="panel-sidebar-item">
              Ürünler <i className="fa-solid fa-tag"></i>
            </NavLink>
            <NavLink href="#PanelHomePage" className="panel-sidebar-item">
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
              <Tab.Pane eventKey="#Products">
               <PanelProducts />
              </Tab.Pane>
              <Tab.Pane eventKey="#PanelHomePage">
                <PanelHomeContent />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </div>
      </Tab.Container>
    </div>
  );
};

export default Panel;
