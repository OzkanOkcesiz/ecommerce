import { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Panel from "./Pages/Panel";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
// import CartDetail from "./Pages/CartDetail/index";
// import Home from "./Pages/Home";
// import Category from "./Pages/Category";
const Home = lazy(() => import("./Pages/Home"));
const CartDetail = lazy(() => import("./Pages/CartDetail"));
const Category = lazy(() => import("./Pages/Category"));
const Panel = lazy(() => import("./Pages/Panel"));

function App() {
  return (
    <>
      <CategoryProvider>
        <ProductProvider>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/*" element={ <Home/> } />
                <Route path="CartDetail" element={<CartDetail />} />
                <Route path="Category/:categoryId" element={<Category />} />
                <Route path="/Panel" element={<Panel />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ProductProvider>
      </CategoryProvider>
    </>
  );
}

export default App;
