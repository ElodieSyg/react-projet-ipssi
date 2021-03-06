import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages importations
import Home from "../../pages/home/index";
import Product from "../../pages/product/index";
import Faq from "../../pages/faq/index";
import NotFound from "../../pages/error/index";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route axect path="/product/:id" element={<Product />} />
                <Route exact path="/faq" element={<Faq />} />
                <Route exact path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;