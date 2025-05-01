import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import Mayoffer from "./mayoffer";
import Footer from "./footer";
import DealCard from "./dealscard";
import Navbar from "./navbar";
function Deals(){

      const navigate = useNavigate();
    
        useEffect(()=>{
            auth.onAuthStateChanged(function(user){
              if(user){
          navigate("/deals")
              }
              else{
                  navigate("/login")
              }
            })
          },[])

    return(
        <section>
<Navbar/>
<Mayoffer/>

<DealCard/>
<Footer/>
        </section>
        
    )
}
export default Deals