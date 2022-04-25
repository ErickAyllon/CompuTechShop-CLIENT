import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/home/:id' element={<Detail/>}/>
      <Route path='/payment' element={<Pago/>}/>
      <Route path='/envio' element={<Envio/>}/>
      <Route path='/product' element={<CreateProduct/>}/>
      <Route path='/profile' element={<Profile/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
