import { lazy } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomeContent from "./components/HomeContent";
import Category from "./components/Category";
import Panel from "./components/Panel";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
import CartDetail from "./components/CartDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
// const Home = lazy(() => import("./components/Home"))
// const Category = lazy(() => import("./components/Category"))

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <BrowserRouter>
            <Header />

            <Routes>

              <Route path="/*" element={<HomeContent/>} />
              <Route path="CartDetail" element={<CartDetail />} />
              <Route path="Category/:categoryId" element={<Category />} />

              <Route path="/Panel" element={<Panel />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ProductProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
