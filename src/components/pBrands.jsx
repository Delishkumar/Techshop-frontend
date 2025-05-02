import PB1 from '../assets/PREMIUM Laptop.png'
import PB2 from '../assets/PREMIUMSmartwatch.png'
import PB3 from '../assets/PREMIUMTablets.png'
import PB4 from '../assets/PREMIUMPCaccessories.png'
import PB5 from '../assets/prmiumbuds.png'
import { Link } from 'react-router-dom'
function PBrands(){
    return(
        <section>
            <div className="bg-slate-600 text-center p-14 m-5">
                <h1 className="text-white font-bold text-4xl md:text-6xl p-3">The Premium Edit</h1>
                <h2 className="text-white font-semibold text-2xl md:text-4xl p-8">Experience Timeless Sophistication With Premium Brands</h2>
                
         <Link to={"/product"} > <button className="text-slate-800 font-semibold text-xl md:text-4xl p-3 borde rounded-full bg-white">EXPLORE NOW</button>

         </Link> 
            <div className='grid grid-cols-5 gap-3 p-5'>
                <Link to={"/laptop"}>
                <img src={PB1} alt='pb' className=' hover:border-4 hover:border-blue-500 hover:rounded-lg'></img>
                </Link>

                <Link to={"/smartwatch"}>
                <img src={PB2} alt='pb'  className=' hover:border-4 hover:border-blue-500 hover:rounded-lg'></img>
                </Link>
                <Link to={"/tablet"}>
                <img src={PB3} alt='pb'  className=' hover:border-4 hover:border-blue-500 hover:rounded-lg'></img>
                </Link>

                <Link to={"/desktop"}>
                <img src={PB4} alt='pb'  className=' hover:border-4 hover:border-blue-500 hover:rounded-lg'></img>
                </Link>

                <Link to={"/headphone"}>
                <img src={PB5} alt='pb'  className=' hover:border-4 hover:border-blue-500 hover:rounded-lg'></img> 
                </Link>
               
                
                
                
                
                

            </div>
            </div>


         
        </section>
    )
}
export default PBrands