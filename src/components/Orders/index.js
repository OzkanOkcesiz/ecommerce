import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useProduct } from "../../context/ProductContext";
import DetailButton from "../DetailButton";

const Orders = () => {
  const { orders } = useProduct();
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
  };
  return (
    <div>
      <table className="table table-hover orders-table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Ad - Soyad</th>
            <th scope="col">Email</th>
            <th scope="col">Telefon</th>
            <th scope="col">Adres</th>
            <th scope="col">Tutar</th>
            <th scope="col">Detay</th>
            <th scope="col">Sil</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <th scope="row">{order.id}</th>
              <td>
                {order.customerName} {order.customerSurname}
              </td>
              <td>{order.customerEmail}</td>
              <td>{order.customerPhone}</td>
              <td>{order.customerAddress}</td>
              <td>
                {`${order.customerProducts
                  .reduce((a, b) => a + b.productPrice * b.productQuantity, 0)
                  .toFixed(2)} TL`}
              </td>
              <td
              >
                <DetailButton order = {order} />
              </td>
              <td
                onClick={() => {
                  removeOrder(order.id);
                }}
              >
                  <button className="order-remove"><i className="fa fa-trash" aria-hidden="true"></i></button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
