
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase";
import HeadphoneProductPage from "./headphone";
function Products(){

     const navigate = useNavigate();

 useEffect(()=>{
        auth.onAuthStateChanged(function(user){
          if(user){
      navigate("/product")
          }
          else{
              navigate("/login")
          }
        })
      },[])


    return(
        <div>
          
             <HeadphoneProductPage/> 
              
            </div>
    )
}
export default Products