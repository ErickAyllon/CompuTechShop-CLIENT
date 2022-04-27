import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Laptops from "./Components/Categories/Laptops/Laptops.jsx";
import Monitors from "./Components/Categories/Monitors/Monitors";
import Headsets from "./Components/Categories/Headsets/Headsets";
import Keyboards from "./Components/Categories/Keyboards/Keyboards";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/home/:id' element={<Detail/>}/>
        <Route path='/payment' element={<Pago/>}/>
        <Route path='/envio' element={<Envio/>}/>
        <Route path='/product' element={<CreateProduct/>}/>
      */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/monitors" element={<Monitors />} />
        <Route path="/headsets" element={<Headsets />} />
        <Route path="/keyboards" element={<Keyboards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
