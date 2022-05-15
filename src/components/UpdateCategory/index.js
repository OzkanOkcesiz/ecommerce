import axios from "axios";
import { Formik } from "formik";
import { React } from "react";
import { useCategory } from "../../context/CategoryContext";

const UpdateCategory = () => {
  const { categories } = useCategory();
  const { categoryValue, setCategoryValue } = useCategory();

  return (
    <div>
      <Formik
        initialValues={{
          category: "",
          categoryId: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.category) {
            errors.category = "Alanı doldurun";
          } else if (values.categoryId === "Lütfen Kategori Seçin") {
            errors.categoryId = "Kategori Seçin";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .put(`http://localhost:3000/categories/${values.categoryId}`, {
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
            <input
              type="text"
              name="category"
              placeholder="Kategori İsmi Girin"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <br />
            {errors.category && touched.category && errors.category}
            <br />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Güncelle
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateCategory;
