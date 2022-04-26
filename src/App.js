import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Laptops from './Components/Categories/Laptops/Laptops.jsx'

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
        <Route path='/profile' element={<Profile/>}/> */}
        <Route path='/laptops' element={<Laptops/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
