import deal1 from '../../assets/images/deal1.png'
import deal2 from '../../assets/images/deal2.png'
import DealItem from './DealItem/DealItem'
function Deals() {
    const deals = [
        {
            image: deal1,
            subtitle: 'Low Price',
            title: 'High Coziness',
            discount: 'UPTO 50% OFF',
            buttonText: 'Explore Items',
        },
        {
            image: deal2,
            subtitle: 'Beyoung Presents',
            title: `Breezy Summer`,
            discount: 'UPTO 50% OFF',
            buttonText: 'Explore Items',
        }
    ]
  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-24 px-1 md:px-0">
        {
            deals.map(deal=>(
                <DealItem key={deal.image} deal={deal}/>
            ))
        }
    </div>
  )
}

export default Deals