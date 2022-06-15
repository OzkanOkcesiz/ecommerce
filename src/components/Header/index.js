import { Badge, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { categories } = useCategory();
  const { cart, setCart } = useProduct();

  const removeProduct = (product) => {
    const newCart = cart.filter((c) => c.product.id !== product.id);
    setCart(newCart);
  };

  const notifyRemove = (product) => toast.error( `${product.name} Silindi!`, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return (
    <div className="header">
      <Navbar expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="header-title" to="/">
              E-COMMERCE
            </NavLink>

            <div className="categories">
              {categories.map((category) => (
                <NavLink
                  className="category"
                  id={category.id}
                  key={category.id}
                  to={`/Category/${category.id} `}
                >
                  {category.categoryName}
                </NavLink>
              ))}
            </div>

            <div className="cart-box">
              <NavDropdown
                show={!cart.length ? false : undefined}
                className="cart-dropdown"
                title={
                  <span>
                    <i className="fa fa-shopping-cart cart-icon"></i>
                    <Badge>{cart.length}</Badge>
                  </span>
                }
                id={"basic-nav-dropdown"}
              >
                {cart.map((cart) => (
                  <div className="cart-item" key={cart.product.id}>
                    <div className="cart-holder flex-start">
                      <span className="cart-image">
                        <img
                          className="cart-item-image"
                          alt=""
                          src={cart.product.img}
                        />
                      </span>
                      <div>
                        <span className="cart-item-name">
                          {cart.product.name}
                        </span>
                        <span className="cart-item-quantity">
                          {` Adet:  ${cart.quantity} `}
                        </span>
                      </div>
                    </div>

                    <div className="cart-holder flex-end">
                      <span className="cart-item-price">
                        {`${(cart.product.price * cart.quantity).toFixed(
                          2
                        )} TL`}
                      </span>
                      <button
                        className="cart-item-remove"
                        onClick={() => {
                          removeProduct(cart.product)
                          notifyRemove(cart.product)
                          }}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                ))}
                <NavLink className="cart-btn" to="/CartDetail">
                  Sepete Git
                </NavLink>
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
