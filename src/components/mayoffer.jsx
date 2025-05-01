import offerimg from '../assets/summersale.gif'
import MONITERSALE from '../assets/dealmoniters.jpg'
function Mayoffer(){

    return(
        <section className='m-5'>
            <div >
    
<img src={offerimg} alt='offerimg' className='border rounded-md'></img>
</div>
<div className='m-0'>
<img src={MONITERSALE} alt='monitersale'></img>
</div>
</section>

    )
}
export default Mayoffer