import React from "react";
import { useProduct } from "../../context/ProductContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OrderSummary from "../../components/OrderSummary";
import { useNavigate } from "react-router-dom";

const CartDetail = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useProduct();
  const removeProduct = (product) => {
    const newCart = cart.filter((c) => c.product.id !== product.id);
    setCart(newCart);
  };

  const cartItemQuantityDecrease = (product) => {
    const newCart = cart.map((c) => {
      if (c.quantity === 1) {
      } else if (c.product.id === product.id) {
        c.quantity -= 1;
      }
      return c;
    });
    setCart(newCart);
  };

  const cartItemQuantityIncrease = (product) => {
    const newCart = cart.map((c) => {
      if (c.product.id === product.id) {
        c.quantity += 1;
      }
      return c;
    });
    setCart(newCart);
  };

  const notifyRemove = (product) =>
    toast.error(`${product.name} Silindi!`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  if (cart.length === 0) {
    return (
      <div className="cart-detail-container">
        <Header />
        <div className="empty-cart">
          <div className="empty-cart-content">
            <h3 className="empty-cart-title"> Sepetiniz boş </h3>
            <button className="empty-cart-btn" onClick={() => navigate("/")}>
              Alışverişe Devam Et
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="cart-detail-container">
        <div className="cart-detail-box">
          <div className="cart-item-box col-9">
            {cart.map((cart) => (
              <div key={cart.product.id} className="cart-item">
                <div className="cart-item-image">
                  <img alt="" src={cart.product.img} />
                </div>
                <div className="cart-item-content">
                  <p>{cart.product.name}</p>
                  <p>{cart.product.author}</p>
                  <p>{cart.product.publisher}</p>
                </div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-quantity-decrease-button"
                    onClick={() => {
                      cartItemQuantityDecrease(cart.product);
                    }}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span> {cart.quantity} </span>
                  <button
                    className="cart-item-quantity-increase-button"
                    onClick={() => {
                      cartItemQuantityIncrease(cart.product);
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div className="cart-item-price">
                  <p>{`${(cart.product.price * cart.quantity).toFixed(
                    2
                  )} TL`}</p>
                </div>
                <div className="cart-item-remove">
                  <button
                    onClick={() => {
                      removeProduct(cart.product);
                      notifyRemove(cart.product);
                    }}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <OrderSummary />
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
      </div>
      <Footer />
    </div>
  );
};

export default CartDetail;
