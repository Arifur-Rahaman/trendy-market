import React from 'react';
import TitleSectionHome from './../TitleSectionHome/TitleSectionHome';
import image1 from '../../assets/images/limelight/product1.png'
import image2 from '../../assets/images/limelight/product2.png'
import image3 from '../../assets/images/limelight/product3.png'
import image4 from '../../assets/images/limelight/product4.png'

const data = [
    {
        image: image1,
        title: 'Black Sweatshirt with ....',
        brand: "Jhanvi's Brand",
        price: 123
    },
    {
        image: image2,
        title: 'line Pattern Black H...',
        brand: "AS’s  Brand",
        price: 37,
    },
    {
        image: image3,
        title: 'Black Shorts',
        brand: "Black Shorts",
        price: 37
    },
    {
        image: image4,
        title: 'Levender Hoodie with ....',
        brand: "Nike’s  Brand",
        price: 119
    },
]
const Limelight = () => {
    return (
        <div className='container mx-auto mb-24'>
            <TitleSectionHome text={'In The Limelight'} />
            <div className='grid grid-cols-4 gap-9'>
                {
                    data.map(product => (
                        <div className='text-[#3C4242]'>
                            <img className='w-full rounded-xl mb-7' src={product.image} />
                            <div className='flex justify-between items-start'>
                                <div>
                                    <p className='text-base font-semibold'>{product.title}</p>
                                    <span className='text-sm font-normal text-[#807D7E]'>{product.brand}</span>
                                </div>
                                <span className='inline-block font-bold text-sm px-4 py-2 rounded-lg bg-[#F6F6F6]'>
                                    ${product.price}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Limelight;