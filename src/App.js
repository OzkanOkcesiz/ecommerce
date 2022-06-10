import { lazy } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import Panel from "./components/Panel";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
import CartDetail from "./components/CartDetail";
// const Home = lazy(() => import("./components/Home"))
// const Category = lazy(() => import("./components/Category"))

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="CartDetail" element={<CartDetail />} />
              <Route path="Category/:categoryId" element={<Category />} />
              <Route path="/Panel" element={<Panel />} />
            </Routes>
          </BrowserRouter>
        </ProductProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
