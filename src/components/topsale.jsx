
import TS1 from '../assets/topsalebuds1.png'
import TS2 from '../assets/topsalebuds2.png'
import TS3 from '../assets/topsalebuds3.png'
import TS4 from '../assets/topsalebuds4.png'
import TS5 from '../assets/topsalehp.png'
import TS8 from '../assets/topsalelaptop.png'
import TS6 from '../assets/topsalelaptop2.png'
import TS7 from '../assets/topsalelenvo.png'
import TS9 from '../assets/topsaletab.png'
import TS10 from '../assets/topsaletap2.png'
import TS11 from '../assets/Topsaletab3.png'
import TS12 from '../assets/Topsaletab4.png'
import TS13 from '../assets/topsalewatch.png'
import TS14 from '../assets/topsalewatch2.png'
import TS15 from '../assets/topsalewatch3.png'
import TS16 from '../assets/topsalewatch4.png'
import { Link } from 'react-router-dom'

function TopSale(){
    return(
        <div id='deals'>
            <section className="m-5">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center p-2 text-orange-500">Top Sales</h2>
                        <div className="grid grid-cols-4 gap-2 md:flex md:justify-between" >

                            <Link to={"/headphone"}>
            <div className='shadow-md hover:-translate-y-1 '>
                <img src={TS1} alt='tl1'></img>
                
            
            </div>
            </Link>

            <Link to={"/headphone"}>
            <div className='shadow-md hover:-translate-y-1 '>
                <img src={TS2} alt='tl1'></img>
                
            
            </div>
            </Link>
            
            <Link to={"/headphone"}>
            <div className='shadow-md hover:-translate-y-1 '>
                <img src={TS3} alt='tl1'></img>
            
            </div>
            </Link>

            <Link to={"/headphone"}>
            <div className='shadow-md hover:-translate-y-1 '>
                <img src={TS4} alt='tl1'></img>
        
            </div>
            </Link>

            <Link to={"/laptop"}>
            <div className='shadow-md hover:-translate-y-1  '>
                <img src={TS5} alt='tl1'></img>
                
            
            </div>
            </Link>

            <Link to={"/laptop"}>
            <div className='shadow-md hover:-translate-y-1 '>
                <img src={TS6} alt='tl1'></img>
                
            
            </div>
            </Link>

            <Link to={"/laptop"}>
            <div className='shadow-md hover:-translate-y-1 '>
                <img src={TS7} alt='tl1'></img>
            
            
            </div>
            </Link>

            <Link to={"/laptop"}>
            <div className='shadow-md hover:-translate-y-1 '>
                <img src={TS8} alt='tl1'></img>
        
            
            </div>
            </Link>
                        </div>
                       
                    </section>

                    <section className="m-5">
                       
                        <div className="grid grid-cols-4 gap-2 md:flex md:justify-between">
                            <Link to={"/tablet"}>
            <div className='shadow-md hover:-translate-y-1 hover:border-4 '>
                <img src={TS9} alt='tl1'></img>
                
            
            </div>
            </Link>

            <Link to={"/tablet"}>
            <div className='shadow-md hover:-translate-y-1 hover:border-4 '>
                <img src={TS10} alt='tl1'></img>
                
            
            </div>
            </Link>

            <Link to={"/tablet"}>
            
            <div className='shadow-md hover:-translate-y-1 hover:border-4 '>
                <img src={TS11} alt='tl1'></img>
            
            
            </div>
            </Link>

            <Link to={"/tablet"}>
            <div className='shadow-md hover:-translate-y-1 hover:border-4 '>
                <img src={TS12} alt='tl1'></img>
        
            
            </div>
            </Link>

            <Link to={"/smartwatch"}>
            <div className='shadow-md hover:-translate-y-1'>
                <img src={TS13} alt='tl1'></img>
                
            
            </div>
            </Link>

            <Link to={"/smartwatch"}>
            <div className='shadow-md hover:-translate-y-1 '>
                <img src={TS14} alt='tl1'></img>
                
            
            </div>
            </Link>
            
            <Link to={"/smartwatch"}>
            <div className='shadow-md hover:-translate-y-1'>
                <img src={TS15} alt='tl1'></img>
            
            
            </div>
            </Link>
            
            <Link to={"/smartwatch"}>
            <div className='shadow-md hover:-translate-y-1'>
                <img src={TS16} alt='tl1'></img>
        
            
            </div>
            </Link>
                   
                        </div>
                       
                    </section>
                   
        </div>
    )
}
export default TopSale