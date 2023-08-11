import React from 'react';
import logo1 from '../../assets/images/brands/brand1.png'
import logo2 from '../../assets/images/brands/brand2.png'
import logo3 from '../../assets/images/brands/brand3.png'
import logo4 from '../../assets/images/brands/brand4.png'
import logo5 from '../../assets/images/brands/brand5.png'
const logos = [logo1, logo2, logo3, logo4, logo5]
const TopBrands = () => {
    return (
        <div className='container mx-auto bg-[#3C4242] px-32 pt-11 pb-14 rounded-xl mb-24 text-white'>
            <h2 className='text-center text-5xl font-extrabold mb-6'>Top Brands Deal</h2>
            <p className='text-xl font-semibold text-center mb-16'>Up To <span className='text-[#FBD103]'>60%</span> off on brands</p>
            <div className='grid grid-cols-5 gap-6'>
                {
                    logos.map((logo)=>(
                        <div className='bg-white rounded-lg py-5 flex justify-center p-5'>
                            <img src={logo} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TopBrands;