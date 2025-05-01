
import TL1 from '../assets/Asus AI.jpg'
import TL2 from '../assets/lenovo ideal pad.jpg'
import TL3 from '../assets/ominibook-1.jpg'
import TL4 from '../assets/intel core ultra.jpg'
import { Link } from 'react-router-dom'

function TrendingLaptop(){
    return(
        <section className="m-5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center p-2">Trending Laptops</h2>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 ">
 <Link to={"/laptop"}  >             
<div className='shadow-md hover:-translate-y-2'>
    <img src={TL1} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Asus AI</h3>

</div>
</Link>

<Link to={"/laptop"}  >
<div className='shadow-md hover:-translate-y-2'>
    <img src={TL2} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Lenovo Ideal One</h3>

</div>
</Link>

<Link to={"/laptop"}  >

<div className='shadow-md hover:-translate-y-2'>
    <img src={TL3} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Omini Book 1</h3>

</div>
</Link>

<Link to={"/laptop"}  >
<div className='shadow-md hover:-translate-y-2'>
    <img src={TL4} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Intel Core Ultra</h3>

</div>
</Link>
            </div>
        </section>
    )
}
export default TrendingLaptop