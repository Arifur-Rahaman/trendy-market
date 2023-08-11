import Rectangle from './../Rectangle/Rectangle';
import photo1 from '../../assets/images/new_arrival1.png'
import photo2 from '../../assets/images/new_arrival2.png'
import photo3 from '../../assets/images/new_arrival3.png'
import photo4 from '../../assets/images/new_arrival4.png'
import TitleSectionHome from '../TitleSectionHome/TitleSectionHome';
const data = [
    {
        image: photo1,
        text:'Urban Shirts'
    },
    {
        image: photo2,
        text:'Full Sleeve'
    },
    {
        image: photo3,
        text:'Active T-Shirts'
    },
    {
        image: photo4,
        text:'Urban Shirts'
    }
]
function NewArrival() {
    return (
        <div className="container mx-auto px-1 md:px-0 mb-24">
            <TitleSectionHome text={'New Arrival'}/>
            <div className='flex justify-between items-center w-full'>
                {
                    data.map((data, i)=>(
                        <div key={i}>
                            <img className='mb-4' src={data?.image}/>
                            <h6 className='text-xl font-bold text-[#3C4242]'>{data.text}</h6>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewArrival