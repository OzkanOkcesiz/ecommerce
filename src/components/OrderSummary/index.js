import React from "react";
import { useProduct } from "../../context/ProductContext";
import OrderButton from "../OrderButton";

const OrderSummary = () => {
  const { cart, setCart } = useProduct();
  return (
    <div className="order-summary-container">
      <div className="order-summary-header">Sipariş Özeti</div>
      <div className="order-summary-box">
        <div className="order-summary-content">
          <span className="order-summary-title">Toplam Tutar:</span>
          <span className="order-summary-title">Kargo Tutar:</span>
        </div>
        <div className="order-summary-price">
          <span className="order-summary-price-value">{`${
            cart.reduce((a, b) => a + b.product.price * b.quantity, 0).toFixed(2)
          } TL`}</span>
          <span className="order-summary-price-value">0 TL</span>
        </div>
      </div>
      <OrderButton/>
    </div>
  );
};

export default OrderSummary;
