import React from "react";
import AddProduct from "../AddProduct";
import UpdateDeleteProduct from "../UpdateDeleteProduct";

const PanelProducts = () => {
  return (
    <div>
      <div className="panel-products">
        <div className="panel-products-title">
          <h2>Ürünler</h2>
        </div>
        <div className="products-content">
          <div className="panel-products-add col-3">
            <h5>Ürün Ekle</h5>
            <AddProduct />
          </div>
          <div className="products-table col-7">
            <UpdateDeleteProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelProducts;
