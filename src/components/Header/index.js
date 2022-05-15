import React from "react";
import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";

const Header = () => {
  const { categories } = useCategory();

  return (
    <div className="header">
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">E-COMMERCE</NavLink>

            <div className="categories">
              {categories.map((category) => (
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "red" : "blue",
                  })}
                  key={category.id}
                  to={`/Category/${category.categoryName} `}
                >
                  {category.categoryName}
                </NavLink>
              ))}
            </div>

            <div className="cart-box">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
                to="/SingUp"
              >
                Üye Ol
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
                to="/Login"
              >
                Giriş
              </NavLink>
              <NavDropdown
                title={
                  <span>
                    <i className="fa fa-shopping-cart cart-icon"></i>{" "}
                    <Badge bg="success">0</Badge>{" "}
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action sadasd asdasd asd
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Header;
