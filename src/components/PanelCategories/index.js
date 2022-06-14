import React from "react";
import { useCategory } from "../../context/CategoryContext";
import AddCategory from "../AddCategory";
import CategoryRemove from "../CategoryRemove";
import UpdateCategory from "../UpdateCategory";

const PanelCategories = () => {
  const { categories } = useCategory();



  return (
    <div className="panel-categories">
      <div className="panel-categories-title">
        <h2>Kategoriler</h2>
      </div>
      <div className="categories-content">
        <div className="panel-categories-add col-4">
          <h5>Kategori Ekle</h5>
          <AddCategory />
        </div>
        <div className="categories-table col-7">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Kategori Id</th>
                <th scope="col">Kategori Adı</th>
                <th scope="col">Düzenle</th>
                <th scope="col">Sil</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <th scope="row"></th>
                  <td>{category.id}</td>
                  <td>{category.categoryName}</td>
                  <td>
                    <UpdateCategory category={category} />
                  </td>
                  <td> <CategoryRemove category={category} /> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PanelCategories;
