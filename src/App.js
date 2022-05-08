import Home from "./Components/Home/Home";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Admin from "./Components/Admin/Admin";
import Profile from "./Components/Auth0/Profile"
import ProductDetail from "./Components/Detail/ProductDetail";
import NotFound404 from "./Components/NotFound404/NotFound404";
import AllProducts from "./Components/Categories/AllProducts/AllProducts";
import ProfileForm from "./Components/Profile/ProfileForm";
import ProductSearched from "./Components/ProductSearched/ProductSearched";
import Help from "./Components/Footer/Help/Help"
import FAQ from "./Components/Footer/FAQ";
import FAQ2 from './Components/Footer/FAQ2'
import WorkWithUs from "./Components/Footer/WorkWithUs";
import About from "./Components/Footer/About";
import Profile2 from "./Components/Profile/Profile2"


import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import FormUser from "./Components/Auth0/FormUser";
import Category from "../src/Components/Categories/Category/Category";
import ViewAllOrders from "./Components/Admin/Orders/ViewAllOrders/ViewAllOreders";
import ViewCategories from "./Components/Admin/Categories/ViewCategories/ViewCategories";
import Products from "./Components/Admin/Products/AdminProducts";
import ProductCreate from "./Components/Admin/Products/ProductCreate/ProductCreate";
import AdminCategories from "./Components/Admin/Categories/AdminCategories";
import AdminProducts from "./Components/Admin/Products/AdminProducts";
import ShopDetails from "./Components/Admin/Orders/ShopDetails/ShopDetails";
import ProductDetailAdmin from "./Components/Admin/Products/Detail/ProductDetailAdmin";
import CategoryAdmin from "./Components/Admin/Products/Categories/Category/CategoryAdmin";
import AllProductsAdmin from "./Components/Admin/Products/Categories/AllProducts/AllProductsAdmin";
import Users from "./Components/Admin/Users/Users";
import UpdateProduct from "./Components/Admin/Products/UpdateProduct/UpdateProduct";
import ProductSearchedAdmin from './Components/Admin/ProductSearchedAdmin/ProductSearchedAdmin'
import PurchaseSummary from "./Components/Cart/PurchaseSummary";


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: "#463dd5",
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: "#000000",
        paper: "#463dd5",
      },
    }),
    ...(mode === "light" && {
      background: {
        default: "#4b4b4b",
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#ffffff",
            secondary: grey[500],
          }),
    },
  },
});

function App() {
  const isDarkTheme = useSelector((state) => state.darkMode);
  const darkModeTheme = createTheme(
    isDarkTheme ? getDesignTokens("dark") : getDesignTokens("light")
  );
  return (
    <ThemeProvider theme={isDarkTheme ? darkModeTheme : darkModeTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Allproducts" element={<AllProducts />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/:name" element={<ProductDetail />} />
          <Route path="/search/:search" element={<ProductSearched />} />
          <Route path="*" element={<NotFound404 />} />
          <Route path="/user" element={<ProfileForm />} />
          <Route path="/form" element={<FormUser />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/products/Allproducts" element={<AdminProducts />} />
          <Route path="/admin/products/:category" element={<CategoryAdmin />} />
          <Route path="/admin/products/createProduct"element={<ProductCreate />} />
          <Route path="/admin/product/:name" element={<ProductDetailAdmin />} />
          <Route path="/admin/product/update/:name" element={<UpdateProduct />} />
          <Route path="/admin/search/:search" element={<ProductSearchedAdmin />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/shop/:id" element={<ShopDetails />} />
          <Route path="/admin/allorders" element={<ViewAllOrders />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path='/FAQ' element={<FAQ/>}/>
          <Route path='/FAQ2' element={<FAQ2/>}/>
          <Route path='/WorkWithUs' element={<WorkWithUs/>}/>
          <Route path='/About' element={<About/>}/>

          <Route path="/purchaseSummary" element={<PurchaseSummary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
