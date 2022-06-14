import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Card, Form, ListGroupItem } from "react-bootstrap";
import { useCategory } from "../../context/CategoryContext";
import { useProduct } from "../../context/ProductContext";
import Pagination from "../Pagination";
import PaginationFeatured from "../PaginationFeatured";

const PanelHomeContent = () => {
  const [sliderImage, setSliderImage] = useState("");
  const { sliders } = useProduct();
  const { sliderValue, setSliderValue } = useProduct();
  const { categories } = useCategory();
  const { products } = useProduct();
  const [changeCategory, setChangeCategory] = useState();
  const [changeCategoryFeatured, setChangeCategoryFeatured] = useState();
  const { featuredProducts } = useProduct();
  const { featuredProductValue, setFeaturedProductValue } = useProduct();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  const [productSearchValue, setProductSearchValue] = useState("");

  const productSearch = (e) => {
    setProductSearchValue(e.target.value);
  };

  const selectChange = (e) => {
    setChangeCategory(e.target.value);
  };

  const [featuredtPage, setFeaturedPage] = useState(1);
  const [featuredsPerPage] = useState(3);

  const selectChangeFeatured = (e) => {
    setChangeCategoryFeatured(e.target.value);
    console.log(e.target.value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products
    .filter(
      (product) =>
        product.categoryId === changeCategory &&
        product.name
          .toLocaleLowerCase("tr")
          .includes(productSearchValue.toLocaleLowerCase("tr"))
    )
    .slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(
    products.filter(
      (product) =>
        product.categoryId === changeCategory &&
        product.name
          .toLocaleLowerCase("tr")
          .includes(productSearchValue.toLocaleLowerCase("tr"))
    ).length / productsPerPage
  );

  const indexOfLastFeatured = featuredtPage * featuredsPerPage;
  const indexOfFirstFeatured = indexOfLastFeatured - featuredsPerPage;
  const currentFeatured = featuredProducts
    .filter(
      (product) =>
        product.categoryId === changeCategoryFeatured &&
        product.name
          .toLocaleLowerCase("tr")
          .includes(productSearchValue.toLocaleLowerCase("tr"))
    )
    .slice(indexOfFirstFeatured, indexOfLastFeatured);

  const totalPagesFeatured = Math.ceil(
    featuredProducts.filter(
      (product) =>
        product.categoryId === changeCategoryFeatured &&
        product.name
          .toLocaleLowerCase("tr")
          .includes(productSearchValue.toLocaleLowerCase("tr"))
    ).length / featuredsPerPage
  );

  const onInputChange = async (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files);
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      setSliderImage(base64);
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

  const removeSlider = (id) => {
    axios
      .delete(`http://localhost:3000/sliders/${id}`)
      .then((res) => {
        console.log(res);
        setSliderValue(!sliderValue);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeFeatured = (id) => {
    axios
      .delete(`http://localhost:3000/featuredProducts/${id}`)
      .then((res) => {
        console.log(res);
        setFeaturedProductValue(!featuredProductValue);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addFeaturedProducts = (product) => {
    axios
      .post("http://localhost:3000/featuredProducts", {
        categoryId: product.categoryId,
        name: product.name,
        author: product.author,
        publisher: product.publisher,
        price: product.price,
        img: product.img,
        id: product.id,
      })
      .then((res) => {
        console.log(res);
        setFeaturedProductValue(!featuredProductValue);
      })
      .catch((err) => {
        console.log(err);
        setFeaturedProductValue(!featuredProductValue);
      });
  };

  const { values, errors, touched, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      categoryId: "",
      name: "",
      author: "",
      publisher: "",
      price: "",
      img: "",
    },

    validate: (values) => {
      const errors = {};
      if (!sliderImage) {
        console.log(values.img);
        errors.img = "Resim yükleyin";
      } else if (sliders.length >= 5) {
        errors.img = "Slider limiti aşıldı";
      }

      return errors;
    },

    onSubmit: (values, { setSubmitting }) => {
      axios
        .post("http://localhost:3000/sliders", {
          img: sliderImage,
        })
        .then((res) => {
          console.log(res);
          setSubmitting(false);
          values.img = "";
          setSliderImage("");
          setSliderValue(!sliderValue);
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
          values.img = "";
          setSliderImage("");
          setSliderValue(!sliderValue);
        });
    },
  });
  return (
    <div className="panel-home-content">
      <div className="panel-homepage-title">
        <h2>Anasayfa</h2>
      </div>
      <div className="slider-content">
        <div className="panel-slider-add">
          <h5>Slider Resim Ekle</h5>
          <div className="add-slider col-3">
            <form onSubmit={handleSubmit}>
              <div className="slider-label">
                <div className="slider-label-box">
                  <label
                    className={
                      sliderImage
                        ? "slider-image-label"
                        : "slider-image-label-empty"
                    }
                    htmlFor="slider-upload"
                  >
                    {sliderImage ? (
                      <img alt="" width={"70px"} src={sliderImage} />
                    ) : (
                      <i className="fa-solid fa-upload"></i>
                    )}
                  </label>

                  {sliderImage ? (
                    <button
                      className="slider-close-btn"
                      onClick={() => {
                        values.img = "";
                        setSliderImage("");
                      }}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  ) : null}
                </div>

                <input
                  id="slider-upload"
                  name="img"
                  onChange={onInputChange}
                  type="file"
                  size="sm"
                  style={{ visibility: "hidden" }}
                  value={values.img}
                />
                {errors.img && touched.img && errors.img}
              </div>
              <button
                className="add-s-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Ekle
              </button>
            </form>
          </div>
        </div>

        <div className="panel-slider-list col-8">
          <h5>Slider Resimleri</h5>
          <div className="slider-list">
            {sliders.map((slider) => (
              <div key={slider.id} className="slider-list-item">
                <div className="slider-list-item-img">
                  <img alt="" src={slider.img} />
                  <div className="slider-list-item-btn">
                    <button
                      style={{ display: "none" }}
                      className="slider-list-item-btn-delete"
                      onClick={() => {
                        removeSlider(slider.id);
                      }}
                    >
                      <i className="fa-solid fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="featured-products">
        <div className="add-featured-products col-5">
          <h5>Öne Çıkan Ürün Ekle</h5>

          <div className="update-product">
            <form className="update-product-form">
              <select
                name={"categoryValue"}
                onChange={selectChange}
                className="form-select"
              >
                <option defaultValue={"selected"}>Lütfen Kategori Seçin</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
              <Form.Control
                type="search"
                placeholder="Ürün Ara"
                onChange={productSearch}
              />
            </form>
            <hr />
            <div className="update-product-content">
              {currentProducts.map((product) => (
                <Card key={product.id} id={product.id}>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="card-author">{product.author}</div>
                  </Card.Body>
                  <ListGroupItem>{product.publisher}</ListGroupItem>
                  <ListGroupItem>
                    {product.price}
                    <span>TL</span>
                  </ListGroupItem>

                  <div className="card-buttons">
                    <button
                      id={product.id}
                      className="product-add-btn"
                      onClick={() => {
                        addFeaturedProducts(product);
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </Card>
              ))}
              {changeCategory &&
              changeCategory !== "Lütfen Kategori Seçin" &&
              currentProducts.length ? (
                <Pagination
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="featured-products-list col-5">
          <h5> Öne Çıkan Ürünler </h5>
          <div className="update-product">
            <form className="update-product-form">
              <select
                name={"categoryValue"}
                onChange={selectChangeFeatured}
                className="form-select"
              >
                <option defaultValue={"selected"}>Lütfen Kategori Seçin</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
              <Form.Control
                type="search"
                placeholder="Ürün Ara"
                onChange={productSearch}
              />
            </form>
            <hr />
            <div className="update-product-content">
              {currentFeatured.map((product) => (
                <Card key={product.id} id={product.id}>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="card-author">{product.author}</div>
                  </Card.Body>
                  <ListGroupItem>{product.publisher}</ListGroupItem>
                  <ListGroupItem>
                    {product.price}
                    <span>TL</span>
                  </ListGroupItem>

                  <div className="card-buttons">
                    <button
                      id={product.id}
                      className="product-remove-btn"
                      onClick={() => {
                        removeFeatured(product.id);
                      }}
                    >
                      <i className="fa-solid fa-trash-alt"></i>
                    </button>
                  </div>
                </Card>
              ))}
              {changeCategoryFeatured &&
              changeCategoryFeatured !== "Lütfen Kategori Seçin" &&
              currentFeatured.length ? (
                <PaginationFeatured
                  totalPagesFeatured={totalPagesFeatured}
                  setFeaturedPage={setFeaturedPage}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelHomeContent;
