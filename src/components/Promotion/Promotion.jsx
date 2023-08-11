import React from 'react';
import promotion1 from '../../assets/images/promotion1.png'
import promotion2 from '../../assets/images/promotion2.png'
const Promotion = () => {
    return (
        <div className='container mx-auto flex text-white'>
            <div
                style={{ backgroundImage: `url(${promotion1})` }}
                className='bg-cover bg-no-repeat bg-center py-44 px-20 basis-full rounded-l-xl'
            >
                <h3 className='text-4xl font-extrabold leading-[50px] mb-8'>WE MADE YOUR EVERYDAY <br /> FASHION BETTER!</h3>
                <span className='inline-block text-xl font-light mb-12 tracking-[1px]'>In our journey to improve everyday fashion, Trendy Market presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</span>
                <a
                    className='inline-block cursor-pointer text-lg font-semibold text-[#3C4242] rounded-lg px-11 py-3 bg-white'
                >
                    Shop Now
                </a>
            </div>
            <div
                style={{ backgroundImage: `url(${promotion2})` }}
                className='bg-cover bg-no-repeat bg-center basis-full rounded-r-xl'
            >
            </div>
        </div>
    );
};

export default Promotion;