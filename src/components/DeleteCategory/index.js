import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { useCategory } from "../../context/CategoryContext";

const DeleteCategory = () => {
  const { categories } = useCategory();
  const { categoryValue, setCategoryValue } = useCategory();

  return (
    <div>
      <Formik
        initialValues={{
          categoryValue: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.categoryValue) {
            errors.categoryValue = "Lütfen Bir Ülke Seçiniz";
          } else if (values.categoryValue === "Lütfen Kategori Seçin") {
            errors.categoryValue = "Lütfen Kategori Seçin";
          }
          return errors;
        }}
        onSubmit={(values) => {
          axios
            .delete(`http://localhost:3000/categories/${values.categoryValue}`)
            .then((res) => {
              setCategoryValue(!categoryValue);
              console.log(res);
            })
            .catch((err) => console.log(err));
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <br />
            <select
              name={"categoryValue"}
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
            <br />
            {errors.categoryValue &&
              touched.categoryValue &&
              errors.categoryValue}
            <br />
            <br />
            <button className="btn btn-danger" type="submit">Sil</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default DeleteCategory;
