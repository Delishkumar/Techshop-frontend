
import TT1 from '../assets/Samsung.jpg'
import TT2 from '../assets/Lenovo.jpg'
import TT3 from '../assets/ipad.jpg'
import TT4 from '../assets/galaxy.png'
import { Link } from 'react-router-dom'
function TrendingTablets(){
    return(
        <section className="m-5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center p-2">Trending Tablets</h2>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 ">

                <Link to={"/tablet"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TT1} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Samsung pad</h3>

</div>
</Link>

<Link to={"/tablet"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TT2} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Lenovo pad</h3>

</div>
</Link>

<Link to={"/tablet"}>

<div className='shadow-md hover:-translate-y-2'>
    <img src={TT3} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>ipad</h3>

</div>
</Link>

<Link to={"/tablet"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TT4} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Galaxy pad</h3>

</div>
</Link>
            </div>
        </section>
    )
}
export default TrendingTablets