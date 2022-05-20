import { lazy } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import HomeContent from "./components/HomeContent";
// import Category from "./components/Category";
import Panel from "./components/Panel";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";

const Home = lazy(() => import("./components/Home"))
const Category = lazy(() => import("./components/Category"))

function App() {
  return (
    <CategoryProvider>
      <ProductProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />}>
              <Route path="/*" element={<HomeContent />} />
              <Route path="Category/:categoryName" element={<Category />} />
            </Route>
            <Route path="/Panel" element={<Panel />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </CategoryProvider>
  );
}

export default App;
