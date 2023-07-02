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
            title: `Breezy Summer\nStyle`,
            discount: 'UPTO 50% OFF',
            buttonText: 'Explore Items',
        }
    ]
  return (
    <div className="container mx-auto flex gap-8 mb-24">
        {
            deals.map(deal=>(
                <DealItem key={deal.image} deal={deal}/>
            ))
        }
    </div>
  )
}

export default Deals