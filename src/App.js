
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./components/signub";
import Login from "./components/login";
import Home from "./components/home";
import Product from './components/product'
import Deals from "./components/Deals";
import LaptopProductList from "./components/laptopos";
import HeadphoneProductPage from "./components/headphone";
import WatchProductPage from "./components/watch";
import TabProductList from "./components/taplets";
import MonitorProductList from "./components/moniter"
import DesktopProductList from "./components/desktop";
import ContactForm from "./components/contact";
import Card from "./components/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderNow from "./components/orderNow";
import ProductDetails from "./components/productdetails";
import Profile from "./profile";
function App(){


 
 
  return(
    <BrowserRouter>
    
  <ToastContainer position="top-center" autoClose={3000} />
 
    <Routes>
   
      <Route path="/signub" element={<Signup/>}></Route>

      <Route path="/login" element={<Login/>}></Route>

      <Route path="/" element={<Home/>}></Route>

      <Route path="/product" element={<Product/>}> </Route>

      <Route path="deals" element={<Deals/>}> </Route>

      <Route path="/contact" element={<ContactForm/>}> </Route>

      <Route path="/ordernow" element={<OrderNow/>}> </Route>

     < Route path="/cart" element={<Card />}> </Route>

      <Route path="/laptop" element={<LaptopProductList  />}></Route>

      <Route path="/headphone" element={<HeadphoneProductPage  />}></Route>

      <Route path="/smartwatch" element={<WatchProductPage  />}></Route>

      <Route path="/tablet" element={<TabProductList  />}></Route>

      <Route path="/monitor" element={<MonitorProductList  />}></Route>

      <Route path="/desktop" element={<DesktopProductList  />}></Route>

      <Route path="/product/:id" element={<ProductDetails />} />

     <Route path="profile" element={<Profile/>}></Route>

    


    </Routes>
    </BrowserRouter>
  );
}

export default App;
