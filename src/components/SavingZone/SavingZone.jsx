import React from 'react';
import TitleSectionHome from './../TitleSectionHome/TitleSectionHome';
import image1 from '../../assets/images/saving_zone1.png'
import image2 from '../../assets/images/saving_zone2.png'
import image3 from '../../assets/images/saving_zone3.png'
import image4 from '../../assets/images/saving_zone4.png'
import image5 from '../../assets/images/saving_zone5.png'

const SavingZone = () => {
    return (
        <div className='container mx-auto mb-6 md:mb-24'>
            <TitleSectionHome text={'Big Saving Zone'} />
            <div className='grid grid-cols-6 gap-5'>
                {/* First row */}
                <div
                    style={{ backgroundImage: `url(${image1})` }}
                    className='col-start-1 col-end-3 text-white bg-cover bg-no-repeat bg-center'
                >
                    <div className='w-fit my-16 ml-5'>
                        <h6 className='text-2xl font-semibold mb-3'>Hawaiian <br /> Shirts</h6>
                        <span className='text-sm font-semibold inline-block mb-3'>Dress up in summer vibe</span>
                        <p className='text-lg font-bold mb-7'>UPTO 50% OFF</p>
                        <div className='mb-10 w-32 flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                                <path d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <a className='text-xs font-medium px-8 py-2 rounded border-2 border-white inline-block uppercase'>Shop Now</a>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${image2})` }}
                    className='col-start-3 col-end-5 bg-cover bg-center bg-no-repeat text-white text-right'
                >
                    <div className='w-fit ml-auto mr-6 mb-10 mt-8'>
                        <span className='inline-block bg-black py-2 px-4 rounded mb-7 text-xs font-semibold'>Limited Stock</span>
                        <h6 className='text-2xl font-semibold mb-3'>Printed <br /> T-Shirt</h6>
                        <span className='text-sm font-semibold inline-block mb-3'>New Designs Every Week</span>
                        <p className='text-lg font-bold mb-7'>UPTO 40% OFF</p>
                        <div className='mb-10 flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                                <path d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className='flex justify-end'>
                            <a className='text-xs font-medium px-8 py-2 rounded border-2 border-white inline-block uppercase'>Shop Now</a>
                        </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${image3})` }}
                    className='col-start-5 col-end-7 bg-cover bg-center bg-no-repeat'
                >
                    <div className='w-fit ml-auto mr-4 mb-16 mt-16'>
                        <h6 className='text-2xl font-semibold mb-3'>Cargo <br/> Joggers</h6>
                        <span className='text-sm font-semibold inline-block mb-3'>Move with style & comfort</span>
                        <p className='text-lg font-bold mb-7'>UPTO 50% OFF</p>
                        <div className='mb-9 ml-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                                <path d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <a className='text-xs font-medium px-8 py-2 rounded border-2 border-[#3C4242] inline-block uppercase'>Shop Now</a>
                    </div>
                </div>
                {/* Second row */}
                <div
                    style={{ backgroundImage: `url(${image4})` }}
                    className='col-start-1 col-end-4 bg-cover bg-no-repeat bg-center'
                >
                    <div className='w-fit ml-auto text-[#3C4242] mt-11 mb-12 mr-32'>
                        <h3 className='text-3xl font-semibold mb-3'>Urban <br /> Shirts</h3>
                        <span className='text-base inline-block font-semibold mb-3'>Live in comfort</span>
                        <p className='text-xl font-bold mb-8'>FLAT 60% OFF</p>
                        <div className='mb-11 flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="31" viewBox="0 0 27 31" fill="none">
                                <path d="M13.6864 2.04785L13.6864 27.88M25.6089 17.9446L15.0914 28.462C14.3154 29.238 13.0573 29.238 12.2813 28.462L1.76383 17.9446" stroke="#3C4242" strokeWidth="2.28571" strokeLinecap="round" />
                            </svg>
                        </div>
                        <button className='text-xs font-medium px-8 py-2 rounded border-2 border-[#3C4242] inline-block uppercase'>SHOP NOW</button>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${image5})` }}
                    className='col-start-4 col-end-7 bg-cover bg-no-repeat bg-center'
                >
                    <div className='w-fit ml-auto text-[#3C4242] mt-11 mb-12 mr-32'>
                        <h3 className='text-3xl font-semibold mb-3'>Oversized <br /> T-Shirts</h3>
                        <span className='text-base inline-block font-semibold mb-3'>Street Style Icon</span>
                        <p className='text-xl font-bold mb-8'>FLAT 60% OFF</p>
                        <div className='mb-11 flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="31" viewBox="0 0 27 31" fill="none">
                                <path d="M13.6864 2.04785L13.6864 27.88M25.6089 17.9446L15.0914 28.462C14.3154 29.238 13.0573 29.238 12.2813 28.462L1.76383 17.9446" stroke="#3C4242" strokeWidth="2.28571" strokeLinecap="round" />
                            </svg>
                        </div>
                        <button className='text-xs font-medium px-8 py-2 rounded border-2 border-[#3C4242] inline-block uppercase'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavingZone;