import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Laptops from "./Components/Categories/Laptops/Laptops.jsx";
import Monitors from "./Components/Categories/Monitors/Monitors";
import Headsets from "./Components/Categories/Headsets/Headsets";
import Keyboards from "./Components/Categories/Keyboards/Keyboards";
import Mouses from "./Components/Categories/Mouses/Mouses";
import Admin from "./Components/Admin/Admin";
import Profile from "./Components/Profile/Profile";
import ProductDetail from "./Components/Detail/ProductDetail";
import NotFound404 from "./Components/NotFound404/NotFound404";
import AllProducts from "./Components/Categories/AllProducts/AllProducts";
import ProfileForm from "./Components/Profile/ProfileForm";

import ProductSearched from "./Components/ProductSearched/ProductSearched";
//esto es una pruevita
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path='/home/:id' element={<Detail/>}/>
        <Route path='/payment' element={<Pago/>}/>
        <Route path='/envio' element={<Envio/>}/>
        <Route path='/product' element={<CreateProduct/>}/>
      */}
        {/* <Route path="/allProductos" element={<AllProductos />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/monitors" element={<Monitors />} />
        <Route path="/mouses" element={<Mouses />} />
        <Route path="/headsets" element={<Headsets />} />
        <Route path="/keyboards" element={<Keyboards />} />
        <Route path="/:name" element={<ProductDetail />} />
        <Route path="/s/:search" element={<ProductSearched />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/user" element={<ProfileForm/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
