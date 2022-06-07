import React from "react";
import { useProduct } from "../../context/ProductContext";
import OrderSummary from "../OrderSummary";

const CartDetail = () => {
  const { cart, setCart } = useProduct();
  const removeProduct = (product) => {
    const newCart = cart.filter((c) => c.product.id !== product.id);
    setCart(newCart);
  };

  console.log(cart);

  return (
    <div className="cart-t-detail-container">
      <div className="cart-detail-box">
        {cart.map((cart) => (
          <div className="cart-item-box col-9" key={cart.product.id}>
            <div className="cart-item">
              <div className="cart-item-image">
                <img alt="" src={cart.product.img} />
              </div>
              <div className="cart-item-content">
                <p>{cart.product.name}</p>
                <p>{cart.product.author}</p>
                <p>{cart.product.publisher}</p>
              </div>
              <div className="cart-item-quantity">
                <input type="number" defaultValue={cart.quantity} />
              </div>
              <div className="cart-item-price">
                <p>{`${(cart.product.price * cart.quantity).toFixed(2)} TL`}</p>
              </div>
              <div className="cart-item-remove">
                <button onClick={() => {
                  removeProduct(cart.product);
                }}>
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartDetail;
