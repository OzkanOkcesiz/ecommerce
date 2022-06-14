import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useProduct } from "../../context/ProductContext";

const OrderButton = () => {
  const { cart, setCart } = useProduct();
  const { orderValue, setOrderValue } = useProduct();

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      adress: "",
    },


    onSubmit: (values, { setSubmitting }) => {
      axios
        .post("http://localhost:3000/orders", {
          customerName: values.name,
          customerSurname: values.surname,
          customerEmail: values.email,
          customerPhone: values.phone,
          customerAddress: values.adress,
          customerProducts: cart.map((c) => ({
            productName: c.product.name,
            productAuthor: c.product.author,
            productPrice: c.product.price,
            productQuantity: c.quantity,
          })),
        })
        .then((res) => {
          console.log(res);
          setSubmitting(false);
          values.name = "";
          values.surname = "";
          values.email = "";
          values.phone = "";
          values.adress = "";
          setOrderValue(!orderValue);
          setCart([]);
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
          values.name = "";
          values.surname = "";
          values.email = "";
          values.phone = "";
          values.adress = "";
          setOrderValue(!orderValue);
          setCart([]);
        });
    },
  });

  return (
    <div>
      <button className="order-summary-btn" onClick={handleShow}>
        Siparişi Tamamla
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adres ve Kart Bilgilerini Girin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="input-name-surname">
              <Form.Control
                type="text"
                name="name"
                placeholder="Ad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}
              <Form.Control
                type="text"
                name="surname"
                placeholder="Soyad"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.surname}
              />
              {errors.surname && touched.surname && errors.surname}
            </div>

            <br />
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <br />
            <Form.Control
              type="phone"
              maxLength={250}
              name="phone"
              placeholder="Telefon"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.adress && touched.adress && errors.adress}
            <br />
            <Form.Control
              type="text"
              name="adress"
              placeholder="Adres"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.adress}
            />
            {errors.adress && touched.adress && errors.adress}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="order-btn" onClick={ 
            () => {
              handleSubmit();
              handleClose();
            }
          }>
            Alışverişi Tamamla
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderButton;
