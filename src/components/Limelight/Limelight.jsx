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
                        <div className='text-[#3C4242] relative'>
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
                            <span className='absolute top-6 right-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                    <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z" stroke="#3C4242" stroke-width="1.26066" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Limelight;