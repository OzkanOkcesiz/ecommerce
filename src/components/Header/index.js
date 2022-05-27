import React, { useEffect } from "react";
import { Badge, CloseButton, Nav, Navbar, NavDropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { NavLink, Outlet } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";

const Header = () => {
  const { categories } = useCategory();
  const { cart, setCart } = useProduct();

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
                  id={category.id}
                  key={category.id}
                  to={`/Category/${category.id} `}
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
                    <i className="fa fa-shopping-cart cart-icon"></i>
                    <Badge bg="success">{cart.length}</Badge>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                {cart.map((cart) => (
                  <div key={cart.product.id}>
                    <span className="cart-img">
                      <img src={cart.product.img} />
                    </span>
                    <span className="cart-name"> {cart.product.name} </span>
                    <span> {` Adet:  ${cart.quantity} `}</span>
                    <span className="cart-price">
                      {`${(cart.product.price * cart.quantity).toFixed(2)} TL`}
                    </span>
                    <CloseButton />
                  </div>
                ))}
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
