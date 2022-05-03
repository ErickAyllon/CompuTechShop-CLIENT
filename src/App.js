import Home from "./Components/Home/Home";
import { useSelector } from "react-redux";
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
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, deepOrange, grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: "#463dd5",
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: '#000000',
        paper: '#463dd5',
      },
    }),
    ...(mode === 'light' && {
      background: {
        default: "#4b4b4b",
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#ffffff',
            secondary: grey[500]
          }),
    },
  },
});


function App() {
  const isDarkTheme = useSelector((state) => state.darkMode)
  const darkModeTheme = createTheme(isDarkTheme ? getDesignTokens('dark') : getDesignTokens('light'));
  return (
    <ThemeProvider theme={isDarkTheme ? darkModeTheme : darkModeTheme}>
    <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
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
    </ThemeProvider>
  );
}

export default App;


