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
        <Route path="/profile" element={<Profile />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/monitors" element={<Monitors />} />
        <Route path="/mouses" element={<Mouses />} />
        <Route path="/headsets" element={<Headsets />} />
        <Route path="/keyboards" element={<Keyboards />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
