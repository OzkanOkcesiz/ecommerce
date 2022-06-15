import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const DetailButton = ({ order }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="detail-button">
      <button className="detail-btn" onClick={handleShow}>
      <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              {order.customerName} {order.customerSurname}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="customer-info">
            <div className="customer-adres">{order.customerAddress}</div>
            <div className="customer-contact">
              <span className="">{order.customerEmail} </span>
              <span>{order.customerPhone}</span>
            </div>
          </div>
          <div className="customer-products">
            <table className="table table-hover customer-detail">
              <thead>
                <tr>
                  <th scope="col">Ürün Adı</th>
                  <th className="customer-product-price" scope="col">Birim Fiyat</th>
                  <th scope="col">Adet</th>
                  <th scope="col">Tutar</th>
                </tr>
              </thead>
              <tbody>
                {order.customerProducts.map((product, index) => (
                  <tr key={index}>
                    <td> {product.productName} </td>
                    <td className="customer-product-price">{`${product.productPrice} TL`}</td>
                    <td>{product.productQuantity}</td>
                    <td className="customer-product-price">
                      {`${(
                        product.productPrice * product.productQuantity
                      ).toFixed(2)} TL`}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="customer-total">
                <tr>
                  <td></td>
                  <td></td>
                  <td className="customer-product-price">Toplam :</td>
                  <td className="customer-product-price">
                    {`${order.customerProducts
                      .reduce(
                        (a, b) => a + b.productPrice * b.productQuantity,
                        0
                      )
                      .toFixed(2)} TL`}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Kapat
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailButton;
