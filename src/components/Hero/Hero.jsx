import heroImage from '../../assets/images/shop-hero-1-product-slide-1.png'
function Hero() {
    return (
        <div
            className="bg-cover bg-no-repeat text-[#fff] py-3 md:py-36 pl-3 md:pl-48"
            style={{ backgroundImage: `url(${heroImage})`}}
        >
            <h5 className='text-3xl font-medium capitalize leading-9 mb-10'>T-shirt / Tops</h5>
            <h1 className='text-7xl font-extrabold mb-10'>Summer <br />Value Pack</h1>
            <h5 className='text-3xl font-medium mb-10'>cool / colorful / comfy</h5>
            <button className='bg-[#FFFFFF] text-[#3C4242] text-2xl font-bold rounded-lg px-20 py-4'>Shop Now</button>
        </div>
    )
}

export default Hero