import Navbar from "./navbar";
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase";
import { useEffect } from "react";
import Slider from "./slider"
import CategoryGrid from "./categorys"
import TrendingLaptop from "./trendingLaptop";
import TrendingBuds from "./trandingBuds";
import TrendingTablets from "./trendingTablets";
import TrendingWatch from "./trendingWatch";
import TopSale from "./topsale";
import PBrands from "./pBrands";
import Footer from "./footer";

const Home = () =>{
  const navigate = useNavigate();

    useEffect(()=>{
        auth.onAuthStateChanged(function(user){
          if(user){
      navigate("/")
          }
          else{
              navigate("/login")
          }
        })
      },[])

    return(
        <div id="home">
        <Navbar/>
        <Slider/>
        <CategoryGrid/>
        <TrendingLaptop/>
        <TrendingBuds/>
        <TrendingTablets/>
        <TrendingWatch/>
        <TopSale/>
<PBrands/>
<Footer/>
        </div>
    )}
export default Home