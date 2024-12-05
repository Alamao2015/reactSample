import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
// import About from "./About";
import Home from "./Home";
// import CryptoDetail from "./Componenets/CryptoDetail";
// import CreateProduct from "./Pages/CreateProduct";
// import ProductList from "./Pages/ProductList";
// import ProductDetails from "./Pages/ProductDetails";
// import Product from "./Pages/Product";
import NotFound from "./NotFound";
import About from "./About";
import ContactIndex from "./Contacts/ContactIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      {/* <div className="p-2 m-2 row text-center">
        <Counter />
        <MoviePage />
      </div> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<ContactIndex />}></Route>
         <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
