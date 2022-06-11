import axios from "axios";
import { useFormik } from "formik";
import { React, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useCategory } from "../../context/CategoryContext";

const UpdateCategory = ({category}) => {
  const { categoryValue, setCategoryValue } = useCategory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      category: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.category) {
        errors.category = "Alanı doldurun";
      }
      return errors;
    },

    onSubmit: (values, { setSubmitting }) => {
      console.log(values.category);
      axios
        .put(`http://localhost:3000/categories/${category.id}`, {
          categoryName: values.category,
        })
        .then((res) => {
          console.log(res);
          setSubmitting(false);
          values.category = "";
          setCategoryValue(!categoryValue);
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
          values.category = "";
          setCategoryValue(true ? false : true);
        });
    },
  });

  return (
    <div>
      <button  className="update-btn" onClick={handleShow}>
      <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>Kategori Düzenle</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              name="category"
              placeholder="Kategori İsmi Girin"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.category && touched.category && errors.category}
            <br />
            <button id="category-modal-btn" type="submit" disabled={isSubmitting}>
              Düzenle
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Kapat</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateCategory;
