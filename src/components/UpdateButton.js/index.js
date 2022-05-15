import axios from "axios";
import { Field, Formik } from "formik";
import { useState } from "react";
import { Button, Card, Form, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";

const UpdateButton = ({product}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { categories } = useCategory();
  const [Image, setImage] = useState("");
  const { productValue, setProductValue } = useProduct(true);

  const onInputChange = async (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files);
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setImage(base64);
      // setImage(URL.createObjectURL(image));
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
        <Formik
        initialValues={{
          categoryId: "",
          name: "",
          author: "",
          publisher: "",
          price: "",
          img: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Alanı doldurun";
          } else if (!values.categoryId) {
            errors.categoryId = "Kategori Seçin";
          } else if (values.categoryId === "Lütfen Kategori Seçin") {
            errors.categoryId = "Kategori Seçin";
          } else if (!values.author) {
            errors.author = "Alanı doldurun";
          } else if (!values.publisher) {
            errors.publisher = "Alanı doldurun";
          } else if (!values.price) {
            errors.price = "Alanı doldurun";
          } else if (!Image) {
            errors.img = "Resim yükleyin";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("http://localhost:3000/products", {
              categoryId: values.categoryId,
              name: values.name,
              author: values.author,
              publisher: values.publisher,
              price: values.price,
              img: Image,
            })
            .then((res) => {
              console.log(res);
              setSubmitting(false);
              values.name = "";
              values.author = "";
              values.publisher = "";
              values.price = "";
              values.img = "";
              setImage("");
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
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <select
              name={"categoryId"}
              onChange={handleChange}
              className="form-select"
            >
              <option defaultValue={"selected"}>Yeni Kategori </option>
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
            <Field
              type="number"
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
                className={Image ? "btn btn-primary" : "btn btn-primary"}
                htmlFor="upload"
              >
                {Image
                  ? // <i className="fa fa-upload" aria-hidden="true"></i>
                    "Resim Yüklendi"
                  : // <i className="fa fa-upload" aria-hidden="true"></i>
                    "Yeni Resim"}
              </label>
              <img alt="" width={"50px"} src={Image} />
              <input
                id="upload"
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
        )}
      </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Güncelle
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            İptal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateButton;
