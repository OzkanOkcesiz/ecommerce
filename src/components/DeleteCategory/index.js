import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useCategory } from "../../context/CategoryContext";

const DeleteCategory = () => {
  const { categories } = useCategory();
  const { categoryValue, setCategoryValue } = useCategory();

  const {
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      categoryValue: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.categoryValue) {
        errors.categoryValue = "Lütfen Bir Ülke Seçiniz";
      } else if (values.categoryValue === "Lütfen Kategori Seçin") {
        errors.categoryValue = "Lütfen Kategori Seçin";
      }
      return errors;
    },

    onSubmit: (values, { setSubmitting }) => {
      axios
        .delete(`http://localhost:3000/categories/${values.categoryValue}`)
        .then((res) => {
          setCategoryValue(!categoryValue);
          console.log(res);
          setSubmitting(false);
        })
        .catch((err) => {
          setCategoryValue(!categoryValue);
          console.log(err);
          setSubmitting(false);
        });
    },
  });

  return (
    <div>
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
        {errors.categoryValue && touched.categoryValue && errors.categoryValue}
        <br />
        <br />
        <button
          className="btn btn-danger"
          type="submit"
          disabled={isSubmitting}
        >
          Sil
        </button>
      </form>
    </div>
  );
};

export default DeleteCategory;
