import heroImage from '../../assets/images/shop-hero-1-product-slide-1.png'
function Hero() {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center text-[#fff] py-3 md:py-36 pl-3 md:pl-48 mb-6 md:mb-24"
            style={{ backgroundImage: `url(${heroImage})`}}
        >
            <h5 className='text-base md:text-3xl font-medium md:font-medium capitalize leading-9 mb-4 md:mb-10'>T-shirt / Tops</h5>
            <h1 className='text-2xl md:text-7xl font-bold md:font-extrabold mb-4 md:mb-10'>Summer <br />Value Pack</h1>
            <h5 className='text-base md:text-3xl font-medium md:font-medium mb-4 md:mb-10'>cool / colorful / comfy</h5>
            <button className='bg-[#FFFFFF] text-[#3C4242] text-sm md:text-2xl font-semibold md:font-bold rounded-lg px-4 py-2 md:px-20 md:py-4'>Shop Now</button>
        </div>
    )
}

export default Hero