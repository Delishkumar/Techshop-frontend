
import TB1 from '../assets/boat.jpg'
import TB2 from '../assets/jbl.jpg'
import TB3 from '../assets/navo buds n1.gif'
import TB4 from '../assets/noise buds.png'
import { Link } from 'react-router-dom'

function TrendingBuds(){
    return(
        <section className="m-5">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center p-2">Trending Buds</h2>
 
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 ">
<Link to={"/headphone"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TB1} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>BOAT Buds</h3>

</div>
</Link>

<Link to={"/headphone"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TB2} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>JBL Buds</h3>

</div>
</Link>

<Link to={"/headphone"}>

<div className='shadow-md hover:-translate-y-2'>
    <img src={TB3} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Nova Buds</h3>

</div>
</Link>

<Link to={"/headphone"}>
<div className='shadow-md hover:-translate-y-2'>
    <img src={TB4} alt='tl1'></img>
    <h3 className='text-center text-slate-600 text-lg md:text-2xl'>Noise Buds</h3>

</div>
</Link>
            </div>
        </section>
    )
}
export default TrendingBuds