
import TW1 from '../assets/fireboltsm.jpg'
import TW2 from '../assets/huaweisw.jpg'
import TW3 from '../assets/noisesw.jpg'
import TW4 from '../assets/boatsw.jpg'
import { Link } from 'react-router-dom'

function TrendingWatch(){
    return(
        
        <section className="m-5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center p-2">Trending SmartWatch</h2>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 ">

                <Link to={"/smartwatch"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TW1} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Fire Bold</h3>

</div>
</Link>

<Link to={"/smartwatch"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TW2} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Huwaei</h3>

</div>
</Link>

<Link to={"/smartwatch"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TW3} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Noise</h3>

</div>
</Link>

<Link to={"/smartwatch"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TW4} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Boat</h3>

</div>
</Link>
            </div>
           
        </section>
       
    )
}
export default TrendingWatch