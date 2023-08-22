import { BrowserRouter,Routes,Route } from "react-router-dom";

import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import { NavbarDefault } from "../component/Navb";
import { SimpleFooter } from "../component/Footer";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import { Cart } from "../pages/Cart";
// import Dataall from "../component/Dataall";
// import AddToCart from "../component/Addtocart";



const Index = () => {
  return (
    <BrowserRouter>
    <NavbarDefault/>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/product" element={<Products />}></Route>
     <Route path="/singleproduct/:id" element={<SingleProduct />}></Route>
     <Route path="/cart" element={<Cart />}></Route>
     <Route path="*" element={<ErrorPage />}></Route>
     {/* <Route path="/addtocart" element={<AddToCart />}></Route> */}

    </Routes>
    <SimpleFooter />
    </BrowserRouter>
  )
}

export default Index