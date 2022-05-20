import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useCategory } from "../../context/CategoryContext";

const AddCategory = () => {
  const { categoryValue, setCategoryValue } = useCategory();

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
      category: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.category) {
        errors.category = "Alanı doldurun";
      }
      return errors;
    },

    onSubmit: (values, {setSubmitting}) => {
      axios
        .post("http://localhost:3000/categories", {
          categoryName: values.category,
        })
        .then((res) => {
          console.log(res);
          setCategoryValue(!categoryValue);
          setSubmitting(false);
          values.category = "";
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);
          values.category = "";
        });
    },
  });



  return (
    <div className={"add-category"}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          placeholder="Kategori İsmi Girin"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.category}
        />
        <br />
        {errors.category && touched.category && errors.category}
        <br />
        <br />
        <button type="submit" disabled={isSubmitting}>
          Ekle
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
