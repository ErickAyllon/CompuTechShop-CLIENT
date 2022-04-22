import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/home/:id' element={<Detalle/>}/>
      <Route path='/pago' element={<Pago/>}/>
      <Route path='/envio' element={<Envio/>}/>
      <Route path='/producto' element={<CrearProducto/>}/>
      <Route path='/perfil' element={<MiPerfil/>}/>
        
   </Routes>
  </BrowserRouter >

  );
}

export default App;
