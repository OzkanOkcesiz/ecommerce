import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";

const UpdateButton = ({ product }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    values.name = "";
    values.author = "";
    values.publisher = "";
    values.price = "";
    values.img = "";
    setImageUpdate("");
    setProductValue(!productValue);
  };
  const handleShow = () => setShow(true);

  const { categories } = useCategory();
  const [imageUpdate, setImageUpdate] = useState("");
  const { productValue, setProductValue } = useProduct(true);

  const onInputChange = async (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files);
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setImageUpdate(base64);
      console.log(imageUpdate);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      categoryId: "",
      name: "",
      author: "",
      publisher: "",
      price: "",
      img: "",
    },

    validate: (values) => {
      if (!values.name) {
        values.name = product.name;
      }
      if (!values.categoryId) {
        values.categoryId = product.categoryId;
      }
      if (values.categoryId === "Lütfen Kategori Seçin") {
        values.categoryId = product.categoryId;
      }
      if (!values.author) {
        values.author = product.author;
      }
      if (!values.publisher) {
        values.publisher = product.publisher;
      }
      if (!values.price) {
        values.price = product.price;
      }
      if (!imageUpdate) {
        setImageUpdate(product.img)
      }
    },

    onSubmit: (values, { setSubmitting }) => {
      axios
        .put(`http://localhost:3000/products/${product.id}`, {
          categoryId: values.categoryId,
          name: values.name,
          author: values.author,
          publisher: values.publisher,
          price: values.price,
          img: imageUpdate,
        })
        .then((res) => {
          console.log(res);
          setSubmitting(false);
          values.name = "";
          values.author = "";
          values.publisher = "";
          values.price = "";
          values.img = "";
          setImageUpdate("");
          setProductValue(!productValue);
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
          values.categoryId = "";
          values.name = "";
          values.author = "";
          values.publisher = "";
          values.price = "";
          values.img = "";
        });
    },
  });

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Güncelle
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ürün Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="update-form" onSubmit={handleSubmit}>
            <select
              name={"categoryId"}
              onChange={handleChange}
              className="form-select"
            >
              <option defaultValue={"selected"}>Lütfen Kategori Seçin</option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {" "}
                  {category.categoryName}{" "}
                </option>
              ))}
            </select>
            {errors.categoryId && touched.categoryId && errors.categoryId}
            <br />
            <Form.Control
              type="text"
              name="name" 
              placeholder={product.name}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <br />
            <Form.Control
              type="text"
              name="author"
              placeholder={product.author}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />
            {errors.author && touched.author && errors.author}
            <br />
            <Form.Control
              type="text"
              name="publisher"
              placeholder={product.publisher}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.publisher}
            />
            {errors.publisher && touched.publisher && errors.publisher}
            <br />
            <Form.Control
              type={"number"}
              name="price"
              placeholder={product.price}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <br />
            {/* <Form.Control
              id="url"
              name="img"
              type="url"
              placeholder="Resim Eklemek İçin Url Girin"
              onChange={handleChange}
              onBlur={handleBlur}
              size = "sm"
              
            /> */}

            <br />
            <div>
              <label
                className={imageUpdate ? "btn btn-primary" : "btn btn-primary"}
                htmlFor="upload-update"
              >
                {imageUpdate
                  ? // <i className="fa fa-upload" aria-hidden="true"></i>
                    "Resim Güncelle"
                  : // <i className="fa fa-upload" aria-hidden="true"></i>
                    "Resim Güncelle"}
              </label>
              <img alt="" width={"50px"} src={imageUpdate} />
              <input
                id="upload-update"
                name="img"
                onChange={onInputChange}
                type="file"
                size="sm"
                style={{ visibility: "hidden" }}
                value={values.img}
              />
              {errors.img && touched.img && errors.img}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Güncelle
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateButton;
